package com.ssafy.vue.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.vue.dto.Aboard;
import com.ssafy.vue.service.AboardService;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/aboard")
public class AboardController {

	private static final Logger logger = LoggerFactory.getLogger(AboardController.class);
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";

	@Autowired
	private AboardService aboardService;

    @ApiOperation(value = "모든 답변글들의 정보를 반환한다.", response = List.class)
	@GetMapping
	public ResponseEntity<List<Aboard>> retrieveAboard() throws Exception {
		logger.debug("retrieveAboard - 호출");
		return new ResponseEntity<List<Aboard>>(aboardService.retrieveAboard(), HttpStatus.OK);
	}

    @ApiOperation(value = "글번호에 해당하는 질문글의 답변글들을 반환한다.", response = List.class)    
	@GetMapping("{articleno}")
	public ResponseEntity<List<Aboard>> detailAboard(@PathVariable int articleno) {
		logger.debug("detailAboard - 호출");
		return new ResponseEntity<List<Aboard>>(aboardService.detailAboard(articleno), HttpStatus.OK);
	}
    
    @ApiOperation(value = "글번호에 해당하는 답변글의 정보를 반환한다.", response = Aboard.class)    
	@GetMapping("/answer/{answerno}")
	public ResponseEntity<Aboard> getAboard(@PathVariable int answerno) {
		logger.debug("getAboard - 호출");
		return new ResponseEntity<Aboard>(aboardService.getAboard(answerno), HttpStatus.OK);
	}

    @ApiOperation(value = "새로운 답변글 정보를 입력한다. 그리고 DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PostMapping
	public ResponseEntity<String> writeAboard(@RequestBody Aboard aboard) {
		logger.debug("writeAboard - 호출");
		if (aboardService.writeAboard(aboard)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

    @ApiOperation(value = "글번호에 해당하는 게시글의 정보를 수정한다. 그리고 DB수정 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PutMapping("{articleno}")
	public ResponseEntity<String> updateAboard(@RequestBody Aboard aboard) {
		logger.debug("updateAboard - 호출");
		logger.debug("" + aboard);
		
		if (aboardService.updateAboard(aboard)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

    @ApiOperation(value = "답변 글번호에 해당하는 답변글의 정보를 삭제한다. 그리고 DB삭제 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@DeleteMapping("{answerno}")
	public ResponseEntity<String> deleteAboard(@PathVariable int answerno) {
		logger.debug("deleteAboard - 호출");
		if (aboardService.deleteAboard(answerno)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
}
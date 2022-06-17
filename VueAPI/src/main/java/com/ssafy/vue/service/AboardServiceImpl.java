package com.ssafy.vue.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.vue.dto.Aboard;
import com.ssafy.vue.mapper.AboardMapper;

@Service
public class AboardServiceImpl implements AboardService {
	
    @Autowired
	private AboardMapper aboardMapper;

    @Override
	public List<Aboard> retrieveAboard() {
		return aboardMapper.selectAboard();
	}
    
  	@Override
	public boolean writeAboard(Aboard aboard) {
		return aboardMapper.insertAboard(aboard) == 1;
	}

	@Override
	public List<Aboard> detailAboard(int articleno) {
		return aboardMapper.selectAboardByNo(articleno);
	}

	@Override
	@Transactional
	public boolean updateAboard(Aboard aboard) {
		return aboardMapper.updateAboard(aboard) == 1;
	}

	@Override
	@Transactional
	public boolean deleteAboard(int answerno) {
		return aboardMapper.deleteAboard(answerno) == 1;
	}

	@Override
	public Aboard getAboard(int answerno) {
		return aboardMapper.getAboard(answerno);
	}
	
}
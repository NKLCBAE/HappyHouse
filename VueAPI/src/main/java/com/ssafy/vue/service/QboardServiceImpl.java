package com.ssafy.vue.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.vue.dto.Qboard;
import com.ssafy.vue.mapper.QboardMapper;

@Service
public class QboardServiceImpl implements QboardService {
	
    @Autowired
	private QboardMapper qboardMapper;

    @Override
	public List<Qboard> retrieveQboard() {
		return qboardMapper.selectQboard();
	}
    
  	@Override
	public boolean writeQboard(Qboard qboard) {
		return qboardMapper.insertQboard(qboard) == 1;
	}

	@Override
	public Qboard detailQboard(int articleno) {
		return qboardMapper.selectQboardByNo(articleno);
	}

	@Override
	@Transactional
	public boolean updateQboard(Qboard qboard) {
		return qboardMapper.updateQboard(qboard) == 1;
	}

	@Override
	@Transactional
	public boolean deleteQboard(int articleno) {
		return qboardMapper.deleteQboard(articleno) == 1;
	}
}
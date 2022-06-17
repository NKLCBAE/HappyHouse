package com.ssafy.vue.service;

import java.util.List;

import com.ssafy.vue.dto.Qboard;

public interface QboardService {
	public List<Qboard> retrieveQboard();
	public Qboard detailQboard(int articleno);
	public boolean writeQboard(Qboard qboard);
	public boolean updateQboard(Qboard qboard);
	public boolean deleteQboard(int articleno);
}

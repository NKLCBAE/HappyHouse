package com.ssafy.vue.service;

import java.util.List;

import com.ssafy.vue.dto.Aboard;

public interface AboardService {
	public List<Aboard> retrieveAboard();
	public List<Aboard> detailAboard(int articleno);
	public boolean writeAboard(Aboard aboard);
	public boolean updateAboard(Aboard aboard);
	public boolean deleteAboard(int answerno);
	public Aboard getAboard(int answerno);
}

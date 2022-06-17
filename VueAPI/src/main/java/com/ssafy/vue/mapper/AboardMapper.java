package com.ssafy.vue.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.vue.dto.Aboard;

@Mapper
public interface AboardMapper {
	public List<Aboard> selectAboard();
	public List<Aboard> selectAboardByNo(int articleno);
	public int insertAboard(Aboard aboard);
	public int updateAboard(Aboard aboard);
	public int deleteAboard(int answerno);
	public Aboard getAboard(int answerno);
}
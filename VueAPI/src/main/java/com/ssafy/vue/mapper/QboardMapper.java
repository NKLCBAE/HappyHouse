package com.ssafy.vue.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.vue.dto.Qboard;
@Mapper
public interface QboardMapper {
	public List<Qboard> selectQboard();
	public Qboard selectQboardByNo(int articleno);
	public int insertQboard(Qboard qboard);
	public int updateQboard(Qboard qboard);
	public int deleteQboard(int articleno);
}
package com.ssafy.vue.service;

import com.ssafy.vue.dto.MemberDto;

public interface MemberService {

	public MemberDto login(MemberDto memberDto) throws Exception;
	public MemberDto userInfo(String userid) throws Exception;
	public boolean registMember(MemberDto memberDto);
	public MemberDto getById(String userid) throws Exception;
	public boolean modifyMember(MemberDto memberDto);
	public boolean deleteMember(String userid);
	
}

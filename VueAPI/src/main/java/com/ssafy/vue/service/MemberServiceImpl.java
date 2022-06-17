package com.ssafy.vue.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.vue.dto.MemberDto;
import com.ssafy.vue.mapper.MemberMapper;

@Service
public class MemberServiceImpl implements MemberService {

	@Autowired
	private MemberMapper memberMapper;
	
	@Override
	public MemberDto login(MemberDto memberDto) throws Exception {
		if(memberDto.getUserid() == null || memberDto.getUserpwd() == null)
			return null;
		return memberMapper.login(memberDto);
	}

	@Override
	public MemberDto userInfo(String userid) throws Exception {
		return memberMapper.userInfo(userid);
	}

	@Override
	public boolean registMember(MemberDto memberDto) {
		return memberMapper.registMember(memberDto) == 1;
	}

	@Override
	public MemberDto getById(String userid) throws Exception {
		return memberMapper.getById(userid);
	}

	@Override
	@Transactional
	public boolean modifyMember(MemberDto memberDto) {
		return memberMapper.modifyMember(memberDto) ==1;
	}

	@Override
	@Transactional
	public boolean deleteMember(String userid) {
		return memberMapper.deleteMember(userid) ==1;
	}
	
}

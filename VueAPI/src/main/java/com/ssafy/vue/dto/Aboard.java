package com.ssafy.vue.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "Aboard (질문글정보)", description = "답변글번호, 질문글번호, 내용, 작성자아이디, 작성일을 가진   Domain Class")
public class Aboard {
	@ApiModelProperty(value = "답변글번호")
	private int answerno;
	@ApiModelProperty(value = "질문글번호")
	private int questionno;
	@ApiModelProperty(value = "작성자아이디")
	private String userid;
	@ApiModelProperty(value = "내용")
	private String content;
	@ApiModelProperty(value = "조회수")
	private int hit;
	@ApiModelProperty(value = "작성일")
	private String regtime;

	public int getAnswerno() {
		return answerno;
	}

	public void setAnswerno(int answerno) {
		this.answerno = answerno;
	}
	
	public int getQuestionno() {
		return questionno;
	}

	public void setQuestionno(int questionno) {
		this.questionno = questionno;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public int getHit() {
		return hit;
	}

	public void setHit(int hit) {
		this.hit = hit;
	}

	public String getRegtime() {
		return regtime;
	}

	public void setRegtime(String regtime) {
		this.regtime = regtime;
	}

	public Aboard(int answerno,int questionno, String userid, String content, int hit, String regtime) {
		super();
		this.answerno = answerno;
		this.questionno = questionno;
		this.userid = userid;		
		this.content = content;
		this.hit = hit;
		this.regtime = regtime;
	}

}
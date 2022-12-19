package com.springboot.main;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardServiceImpl implements BoardService {
	
	@Autowired
	private BoardDAO boardDAO;

	@Override
	public void write() {
		BoardDTO boardDTO = new BoardDTO();
		boardDTO.setId("11");
		boardDTO.setName("홍길동");
		boardDTO.setSubject("홍길동전");
		boardDTO.setContent("동에 번쩍 서에 번쩍");
		
		boardDAO.save(boardDTO);
	}

	@Override
	public List<BoardDTO> getBoardList() {
		return boardDAO.findAll();
	}

}

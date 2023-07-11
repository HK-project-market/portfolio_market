package com.market.market.service.board;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.market.market.dto.request.board.WriteBoardReqDto;
import com.market.market.entity.User;
import com.market.market.repository.UserRepository;
import com.market.market.repository.WriteBoardRepository;
import com.market.market.security.PrincipalUser;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class WriteBoardService {

	@Value("${file.path}")
	private String filePath;
	private final WriteBoardRepository boardRepository;
	
	public int insertBoard(WriteBoardReqDto boardReqDto) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();
		
		Map<String, Object> map = new HashMap<>();
		
		map.put("title", boardReqDto.getTitle());
		map.put("content", boardReqDto.getContent());
		map.put("price", boardReqDto.getPrice());
		map.put("addressId", boardReqDto.getNationWideDetailId());
		map.put("category", boardReqDto.getCategoryId());
		map.put("userId", principalUser.getUserId());
		
		boardRepository.insertBoard(map);
		return 1;
	}
	
	public List<String> getNationWide() {
//		System.out.println(boardRepository.getNationWide());
		return boardRepository.getNationWide();
//		return null;
	}

	public List<String> getNationWideDetail(String nationWide) {
//		System.out.println(boardRepository.getNationWideDetail(nationWide));
		return boardRepository.getNationWideDetail(nationWide);
//		return null;
	}
	
	public List<String> getAddress(int nationWideDetailId) {
		
		return boardRepository.getAddress(nationWideDetailId);
	}
	
	public List<String> getCategory() {
		
		return boardRepository.getCategory();
	}
	

	
	
	public int updateProfileImg(List<MultipartFile> productImgFiles) {
	    List<String> originFileNames = new ArrayList<>();
	    List<String> tempFileName = new ArrayList<>();
	    
	    for (MultipartFile file : productImgFiles) {
	        originFileNames.add(file.getOriginalFilename());
	    }


	    List<String> extension = new ArrayList<>();
//	    for (String originFileName : originFileNames) {
	    for(int i = 0; i < originFileNames.size(); i++) {
	        extension.add(originFileNames.get(i).substring(originFileNames.get(i).lastIndexOf(".")));
	        tempFileName.add(UUID.randomUUID().toString().replaceAll("-", "") + extension.get(i));
	        String absolutePath = Paths.get("").toAbsolutePath().toString().replace("\\", "/");
	        String resourcePath = absolutePath + filePath + "product/" + tempFileName.get(i);
	        Path uploadPath = Paths.get(resourcePath);
	        try {
	            int fileIndex = originFileNames.indexOf(originFileNames.get(i));
	            Files.write(uploadPath, productImgFiles.get(fileIndex).getBytes());
	        } catch (IOException e) {
	            e.printStackTrace();
	        }
	    }
	    boardRepository.updateProfileImg(tempFileName);
	    return 0;
	}

}

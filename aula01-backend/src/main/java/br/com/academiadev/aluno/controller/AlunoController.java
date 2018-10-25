package br.com.academiadev.aluno.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.academiadev.aluno.model.Aluno;

@RestController
public class AlunoController {

	@GetMapping(value = "/helloWord")
	public String helloWord() {
		return "Hello Word";
	}

	@CrossOrigin
	@GetMapping(value = "/alunos")
	public List<Aluno> buscarAlunos() {
		List<Aluno> alunos = new ArrayList<>();
		
		alunos.add(new Aluno(1l, "Bruno", 19));
		alunos.add(new Aluno(2l, "Leonardo", 32));
		alunos.add(new Aluno(3l, "João", 13));
		
		return alunos;
	}

}

package br.com;

import org.junit.Assert;
import org.junit.Test;

import br.com.academiadev.Exercicio01;

public class Exercicio01Test {

	@Test
	public void givenQtdMinima10AndQtdMaxima20Then15() {
		Exercicio01 r = new Exercicio01();
		double estoqueMedio = r.calculaEstoqueMedio(10, 20);

		Assert.assertEquals(15, estoqueMedio, 0);
	}

	@Test
	public void givenQtdMinima5AndQtdMaxima70Then37PONTO5() {
		Exercicio01 r = new Exercicio01();
		double estoqueMedio = r.calculaEstoqueMedio(5, 70);

		Assert.assertEquals(37.5, estoqueMedio, 0);
	}

}

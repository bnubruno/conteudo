package br.com.academiadev;

import java.util.Scanner;

public class Exercício02 {

	// ALT SHIFT M
	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		double cotacao_dolar, valor_dolar, valor_real;
		System.out.print("Conversor de dólar em real\n\n");
		System.out.print("Digite a cotação do dolar: ");
		cotacao_dolar = entrada.nextDouble();

		System.out.print("Digite o valor em dolar: ");
		valor_dolar = entrada.nextDouble();

		valor_real = calculaCotacao(cotacao_dolar, valor_dolar);

		System.out.print("O Valor em reais é " + valor_real + "\n");
	}

	private static double calculaCotacao(double cotacaoDolar, double valor_dolar) {
		return cotacaoDolar * valor_dolar;
	}

}

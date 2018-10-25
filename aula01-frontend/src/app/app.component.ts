import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Aluno {
  id: number;
  nome: String;
  idade: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'idade'];
  dataSource = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/alunos').subscribe(res => {
      this.dataSource = <Array<Aluno>>res;
    })

  }

}

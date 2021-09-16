import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PacienteProvider {

  ENTIDADE = '/pacientes';

  constructor(public http: HttpClient, public afd: AngularFireDatabase) {
  }

  listar(){
    return this.afd.list(this.ENTIDADE)
    .snapshotChanges()
    .map(item => item.map(changes => ({key: changes.payload.key, value: changes.payload.val() })));
  }

  inserir(paciente){
    return this.afd.list(this.ENTIDADE).push(paciente);
  }

  atualizar(id, paciente){
    return this.afd.object(this.ENTIDADE + '/' + id).update(paciente);

  }

  remover(id){
    return this.afd.object(this.ENTIDADE + '/' + id).remove();
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class MedicoProvider {

  ENTIDADE = "/medicos";

  constructor(public http: HttpClient, public afd: AngularFireDatabase) {
  }

  listar(){
    return this.afd.list(this.ENTIDADE)
    .snapshotChanges()
    .map(item => item.map(changes => ({key: changes.payload.key, value: changes.payload.val()})));
  }

  inserir(medico){
    return this.afd.list(this.ENTIDADE).push(medico);
  }

  atualizar(id, medico){
    return this.afd.object(this.ENTIDADE + '/' + id).update(medico);

  }

  remover(id){
    return this.afd.object(this.ENTIDADE + '/' + id).remove();
  }

}


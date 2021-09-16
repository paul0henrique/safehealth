import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PacienteProvider } from '../../providers/paciente/paciente';

@IonicPage()
@Component({
  selector: 'page-pacientes-list',
  templateUrl: 'pacientes-list.html',
})
export class PacientesListPage {

  pacientes = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public pacienteProvider: PacienteProvider
    ) {

      this.pacienteProvider.listar().subscribe(_data => {
        console.log(_data);
        this.pacientes = _data;
      })
  }

  addItem() {
    this.navCtrl.push('PacientesFormPage');
  }

  editItem(item) {
    const pacienteID = item.key;
    const paciente = item.value;

    this.navCtrl.push('PacientesFormPage', { itemID: pacienteID, item: paciente } );
  }

}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  guardarViaje(viaje: any): Promise<any> {
    return this.firestore.collection('viajes').add(viaje);
  }

  obtenerViajes(): Observable<any[]> {
    return this.firestore.collection('viajes').valueChanges({ idField: 'id' });
  }

  guardarUser(user: any): Promise<any> {
    return this.firestore.collection('users').add(user);
  }
}

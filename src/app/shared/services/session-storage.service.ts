import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  private isBrowser: boolean = typeof window !== 'undefined';

  static inserir(chave: string, valor: string) {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.setItem(chave, valor);
    }
  }

  static excluir(chave: string) {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.removeItem(chave);
    }
  }

  static limparSession() {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.clear();
    }
  }

  static buscar(chave: string): string {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      return sessionStorage.getItem(chave) ?? '';
    } else {
      return '';
    }
  }
}

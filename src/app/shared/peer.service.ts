import { Injectable } from '@angular/core';
import Peer from 'peerjs';
import AES from 'crypto-js/aes';

@Injectable({
  providedIn: 'root'
})
export class PeerService {

  constructor() {
  }


  private static generateSecret(length): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  generateId(min, max): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  create(id: number): Peer {
    return new Peer(`dropclip-peer-${id}`);
  }

  connect(peer: Peer, id: number): Peer.DataConnection {
    const secret = PeerService.generateSecret(256);

    sessionStorage.setItem('secret', secret);

    return peer.connect(
      `dropclip-peer-${id}`,
      {
        metadata: secret
      }
    );
  }
}

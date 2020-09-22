import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Peer from 'peerjs';
import AES from 'crypto-js/aes';

@Injectable({
  providedIn: 'root'
})
export class PeerService {

  public localId: number;
  public localPeer: Peer;
  public peerConnection: Peer.DataConnection = null;
  public secondPeerConnection: Peer.DataConnection = null;

  constructor(
    private router: Router
  ) {
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

  private static generateId(min, max): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  create(): Peer {
    this.localId = PeerService.generateId(1000, 9999);
    this.localPeer = new Peer(`dropclip-peer-${this.localId}`);

    return this.localPeer;
  }

  connect(id: number): Peer.DataConnection {
    const secret = PeerService.generateSecret(256);

    sessionStorage.setItem('secret', secret);

    this.peerConnection = this.localPeer.connect(
      `dropclip-peer-${id}`,
      {
        metadata: secret
      }
    );

    this.peerConnection.on('open', () => {
      this.router.navigateByUrl('c');
    });

    this.peerConnection.on('close', () => {
      this.router.navigateByUrl('');
    });

    return this.peerConnection;
  }
}

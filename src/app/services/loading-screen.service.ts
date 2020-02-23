import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoadingScreenComponent } from '../components/loading-screen/loading-screen.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingScreenService {
  disableLoadingScreen: boolean;
  private overlayRef: OverlayRef = null;

  constructor(private overlay: Overlay) { }

  public show() {
    if (this.disableLoadingScreen) {
      return;
    }
    // Returns an OverlayRef (which is a PortalHost)

    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create();
    }

    // Create ComponentPortal that can be attached to a PortalHost
    const spinnerOverlayPortal = new ComponentPortal(LoadingScreenComponent);
    const component = this.overlayRef.attach(spinnerOverlayPortal); // Attach ComponentPortal to PortalHost
  }

  public hide() {
    if (!!this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}

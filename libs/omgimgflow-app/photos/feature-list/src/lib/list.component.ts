import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'omgimgflow-list',
  templateUrl: './list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() photos: any;
  @Output() photoClicked = new EventEmitter<any>();

  trackbyFn(photo: any) {
    return photo.id;
  }

  handleConfigureClick(photo: any) {
    this.photoClicked.emit(photo);
  }
}

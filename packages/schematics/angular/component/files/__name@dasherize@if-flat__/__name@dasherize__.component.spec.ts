import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';

@Component({
  selector: 'app-host',
  template: `
    <app-<%= dasherize(name) %>></app-<%= dasherize(name) %>>
  `,
})
class HostComponent {
  @ViewChild(<%= classify(name) %>Component) componentUnderTest: <%= classify(name) %>Component;
}

describe('<%= classify(name) %>Component', () => {
  let component: <%= classify(name) %>Component;
  let host: HostComponent;
  let fixture: ComponentFixture<<%= classify(name) %>Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        <%= classify(name) %>Component,
        HostComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    component = host.componentUnderTest;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

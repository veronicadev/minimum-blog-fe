import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPreviewMetaComponent } from './post-preview-meta.component';

describe('PostPreviewMetaComponent', () => {
  let component: PostPreviewMetaComponent;
  let fixture: ComponentFixture<PostPreviewMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPreviewMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPreviewMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

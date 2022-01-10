import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserService } from '../service/user.service';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { mockUsers } from '../mocks/mockUsers';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UserDetailComponent,
        UserListComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSelectUser should be exist', () => {
    expect(component.onSelectUser).toBeTruthy();
  });

  it('onDeleteUser should be exist', () => {
    expect(component.onDeleteUser).toBeTruthy();
  });

  it('onSelectUser should be called', async () => {
    spyOn(component, 'onSelectUser');

    component.users = mockUsers;
    fixture.detectChanges();

    let button = fixture.debugElement.nativeElement.querySelector(
      'table tbody tr:nth-child(5) button'
    );
    button.click();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.onSelectUser).toHaveBeenCalled();
    });
  });

  it('onDeleteUser should be called', async () => {
    spyOn(component, 'onDeleteUser');

    component.users = mockUsers;
    fixture.detectChanges();

    let button = fixture.debugElement.nativeElement.querySelector(
      'table tbody tr:nth-child(5) button'
    );
    button.click();
    fixture.detectChanges();

    let delButton = fixture.debugElement.nativeElement.querySelector(
      '.card.user-card .card-body button'
    );
    delButton.click();

    fixture.whenStable().then(() => {
      expect(component.onDeleteUser).toHaveBeenCalled();
    });
  });

});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

describe('AppComponent avec spectator', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;
  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [AppComponent],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });
  it('should work', () => {
    const article = spectator.query('article');
    expect(article?.textContent).toContain('Cliquez sur le bouton "Générez"');
  });
  it('should change message when button is clicked', () => {
    spectator.click('button');
    expect(component.message).toEqual('MON_MOT_DE_PASSE');
    expect(spectator.query('article')).toHaveText('MON_MOT_DE_PASSE');
  });
  it('should change message when checkbox is clicked', () => {
    spectator.click('#uppercase');
    expect(component.uppercase).toBeTrue();
    spectator.click('#numbers');
    expect(component.numbers).toBeTrue();
    spectator.click('#symbols');
    expect(component.symbols).toBeTrue();
    spectator.typeInElement('33', '#length');
    expect(component.length).toEqual(33);
  });
});

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as message 'Cliquez sur le bouton "Générez"'`, () => {
    const app = fixture.componentInstance;
    expect(app.message).toEqual('Cliquez sur le bouton "Générez"');
  });

  it('should render message', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('article')?.textContent).toContain(
      'Cliquez sur le bouton "Générez"'
    );
  });

  it('should change message when button is clicked', () => {
    const app = fixture.componentInstance;
    fixture.autoDetectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const button = compiled.querySelector('button');
    if (!button) {
      return;
    }
    button.click();
    expect(app.message).toEqual('MON_MOT_DE_PASSE');
    expect(compiled.querySelector('article')?.textContent).toContain(
      'MON_MOT_DE_PASSE'
    );
  });

  it('should change message when checkbox is clicked', () => {
    const app = fixture.componentInstance;
    fixture.autoDetectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const checkboxes = compiled.querySelectorAll('input[type=checkbox]');
    if (!checkboxes) {
      return;
    }
    checkboxes.forEach((checkbox) => {
      (checkbox as HTMLInputElement).click();
    });

    expect(app.uppercase).toBeTrue();
    expect(app.numbers).toBeTrue();
    expect(app.symbols).toBeTrue();

    const length = fixture.nativeElement.querySelector('#length');
    length.value = 33;
    length.dispatchEvent(new Event('input'));
    expect(app.length).toEqual(33);
  });
});

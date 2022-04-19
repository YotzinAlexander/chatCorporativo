import { TestBed, inject } from '@angular/core/testing';
import { UsuarioGuard } from './usuario.guard';
describe('UsuarioGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UsuarioGuard]
        });
    });
    it('should ...', inject([UsuarioGuard], (guard) => {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=usuario.guard.spec.js.map
import { User, UserService } from "./UserService";

describe('UserService', () => {
    const mockDb: User[] = [
        {
            name: "Joana",
            email: "joana@dio.com",
        },
        {
            name: "Vitor",
            email: "vitor@dio.com"
        },
        {
            name: "Dani",
            email: "dani@dio.com"
        },
        {
            name: "Reginaldo",
            email: "reginaldo@dio.com"
        }
    ]
    const userService = new UserService(mockDb);

    it('Deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('nath', 'nath@test.com');
        expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDb)
    });

    it('Deve deletar um usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log');
        userService.deleteUser("vitor@dio.com");
        expect(mockConsole).toHaveBeenCalledWith('Usuário deletado!');
    });

    it('Não deve deletar um usuário se não encontrar', () => {
        const mockConsole = jest.spyOn(global.console, 'log');
        userService.deleteUser('vitor@gmail.com');
        expect(mockConsole).toHaveBeenCalledWith('Usuário não encontrado!');
    });
});

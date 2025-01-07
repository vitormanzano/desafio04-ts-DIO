import { UserController } from "./UserController";
import { User, UserService } from '../services/UserService'
import { Request } from 'express'
import { makeMockResponse } from "../__mocks__/mockResponse.mock";

describe('UserController', () => {
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn(),
        getAllUsers: jest.fn(),
        deleteUser: jest.fn()
    };
    
    const userController = new UserController(mockUserService as UserService);

    it('Deve adicionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'Nath',
                email: 'nath@test.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado' });
    });

    it('Deve retornar todos os usuários', () => {
        const mockTrackController = jest.spyOn(userController, 'getAllUsers');
        const mockRequest = {} as Request;
        const mockResponse = makeMockResponse();

        userController.getAllUsers(mockRequest, mockResponse);
        
        expect(mockTrackController).toHaveBeenCalled();
    });

    it('Deve deletar um usuário', () => {
        const mockRequest = {
            body: {
                email: 'dani@dio.com'
            }
        } as Request
        const mockResponse = makeMockResponse();
        userController.deleteUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário deletado com sucesso!'});
        //expect(mockUserService.deleteUser).toHaveBeenCalledTimes(1);
    });

    it('Não deve deletar um novo usuário com o email em branco', () => {
        const mockRequest = {
            body: {
                
            }
        } as Request
        const mockResponse = makeMockResponse();

        userController.deleteUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Email obrigatório'});

    });

    it('Não deve adicionar um novo usuário com o nome em branco', () => {
        const mockRequest = {
            body: {
                name: '',
                email: 'vitor@test.com'
            }
        } as Request
        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Name obrigatório'});
    });

    it('Não deve adicionar um novo usuário com o email em branco', () => {
        const mockRequest = {
            body: {
                name: 'Vitor',
                email: ''
            } 
        } as Request
        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Email obrigatório'});
    });  
});

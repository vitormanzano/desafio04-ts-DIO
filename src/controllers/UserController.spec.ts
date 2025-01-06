import { UserController } from "./UserController";
import { User, UserService } from '../services/UserService'
import { Request } from 'express'
import { makeMockResponse } from "../__mocks__/mockResponse.mock";

describe('UserController', () => {
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn(),
        getAllUsers: jest.fn()
    }
    
    const userController = new UserController(mockUserService as UserService);

    // it('Deve adicionar um novo usuário', () => {
    //     const mockRequest = {
    //         body: {
    //             name: 'Nath',
    //             email: 'nath@test.com'
    //         }
    //     } as Request
    //     const mockResponse = makeMockResponse()
    //     userController.createUser(mockRequest, mockResponse)
    //     expect(mockResponse.state.status).toBe(201)
    //     expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado' })
    // });

    // it('Não deve adicionar um novo usuário com o nome em branco', () => {
    //     const mockRequest = {
    //         body: {
    //             name: '',
    //             email: 'vitor@test.com'
    //         }
    //     } as Request
    //     const mockResponse = makeMockResponse();
    //     userController.createUser(mockRequest, mockResponse);
    //     expect(mockResponse.state.status).toBe(400);
    //     expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Name obrigatório'});
    //     console.log("Sucesso");
    // });

    it('Deve retornar todos os usuários', () => {
        const mockTrackController = jest.spyOn(userController, 'getAllUsers');
        const mockRequest = {} as Request;
        const mockResponse = makeMockResponse();

        userController.getAllUsers(mockRequest, mockResponse);
        
        expect(mockTrackController).toHaveBeenCalled();
    });
})

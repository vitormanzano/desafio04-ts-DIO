export interface User {
    name: string
    email: string
}

const db = [
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

export class UserService {
    db: User[]

    constructor(database = db){
        this.db = database
    }

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }

        this.db.push(user)
        console.log('DB atualizado', this.db)
    }

    getAllUsers = () => {
        return this.db
    }

    deleteUser = (email: string) => {
        
        const indexUser = this.db.findIndex(user => user.email === email);

        if (indexUser === -1 ) {
            console.log('Usuário não encontrado!');
            return false;
        };
        this.db.splice(indexUser, 1);
        console.log('Usuário deletado!');
        return true;
    };
};


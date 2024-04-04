# api-node
API en Node.js con framework Serverless 
Despliegue de Lambdas 

1.1 Prerrequisitos
    1. Contar con un equipo local con sistema operativo Linux, que tenga instalado las siguientes herramientas:
    • NodeJS v16 o mayor.
    • Serverless v3 o mayor.
    • Git v2 o mayor.

    2. Contar con acceso a Github sobre el proyecto repositorio:
    • https://github.com/jcollasn/api-node

    3. Contar con acceso AWS con los siguientes recursos:
    • CloudFormation
    • ApiGateway
    • Lambda
    • IAM
    • CloudWatch
    • Dynamodb

1.2 Validación de ambiente
    1. NodeJS
	Verificar que la instancia instalada de NodeJS es como mínimo la versión 12.

    Utilizar el comando:
    node –v

    Ejemplo:
![image](https://github.com/jcollasn/api-node/assets/19940696/ffb04a3f-83bf-42b1-8bb9-b6cb08aeb993)



        En caso no contar con NodeJs, instalarlo.

    Utilizar los comandos:
    curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash
    sudo apt install -y nodejs


2. Serverless
	Verificar que la instancia instalada de Serverless es como mínimo la versión 2.

    Utilizar el comando:
    serverless --version

    Ejemplo:
![image](https://github.com/jcollasn/api-node/assets/19940696/05b7dcff-f98a-496c-a92f-4a5711648cc7)



	En caso no contar con Serverless, instalarlo.

    Utilizar el comando:
    npm install -g serverless


3. Git
	Verificar que la instancia instalada de Git es como mínimo la versión 2.

    Utilizar el comando:
    git --version

    Ejemplo:
![image](https://github.com/jcollasn/api-node/assets/19940696/0884f8ff-35df-4327-bf9a-32322c33b71b)



    1.3 Instalación de Lambdas
        1. En Github, repositorio:
     		• API https://github.com/jcollasn/api-node
   	2. Clonar el repositorio:
        	• API Node
        	a. Ejecutar el comando:
                	git clone https://github.com/jcollasn/api-node.git
        	b. Ingresar al directorio:
                    	cd api-node
	![image](https://github.com/jcollasn/api-node/assets/19940696/740a6e0e-7d66-4c88-9a5e-d247aa17e6f3)

			


    3. Instalar NPM para API node, ejecutar el comando:
		npm install

    4. Desplegar API Node, ejecutar el comando:
		serverless deploy 

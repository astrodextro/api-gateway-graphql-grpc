const PROTO_PATH = "src/proto/users.proto";

const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
	keepCase: true,
	longs: String,
	enums: String,
	arrays: true
});

const UsersService = grpc.loadPackageDefinition(packageDefinition).UsersService;
const usersServiceClient = new UsersService(
	"localhost:7001",
	grpc.credentials.createInsecure()
);

module.exports = usersServiceClient;

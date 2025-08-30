# Server

Sample code for the server gearup

## Endpoints

### Age

- **GET /agify**: returns age for given name.

Example query: [localhost8000:/agify?name=John](http://localhost:8000/agify?name=john)

## Installation

`npm install`

## Running the Server

Build with `npm run build`, then run wtih `npm run start`.

## Scripts

| Command              | Description                                 |
| -------------------- | ------------------------------------------- |
| `npm run clean`      | Cleanup.                                    |
| `npm run build`      | Build ts code into js.                      |
| `npm run start`      | Start server.                               |
| `npm run test`       | Run all unit tests using vitest.            |
| `npm run playwright` | Run all integration tests using playwright. |

## TODOs:

1. src/server.ts: Build and run the server, investigate the code, and try out some get requests
2. src/agify/tests/fetchAgeServices.test.ts: Take a look at how we validate the respoonse in the second test
3. src/agify/agifyHandler.ts: Change "/agify" to something else and investigate the result
4. src/agify/personType.ts: Make the Zod schema defensive
5. tests/server.test.ts: Fix the Playwright tests

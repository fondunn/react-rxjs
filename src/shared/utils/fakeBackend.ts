export const fakeBackend = () => {
  const users: User[] = [
    { id: 1, username: "test", password: "test", firstName: "Test", lastName: "User" },
  ];

  const realFetch = window.fetch;

  window.fetch = function (input: RequestInfo, init?: RequestInit): Promise<Response> {
    const url = typeof input === "string" ? input : input.url;
    const headers = new Headers(init?.headers);

    const isLoggedIn = headers?.get("Authorization") === "Bearer fake-jwt-token";

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url.endsWith("/users/authenticate") && init?.method === "POST") {
          if (init.body) {
            const params = JSON.parse(init.body as string);
            const user = users.find(
              (x) => x.username === params.username && x.password === params.password,
            );
            if (!user) return error("Username or password is incorrect");
            return ok({
              id: user.id,
              username: user.username,
              firstName: user.firstName,
              lastName: user.lastName,
              token: "fake-jwt-token",
            });
          } else {
            return error("Invalid request body");
          }
        }

        if (url.endsWith("/users") && init?.method === "GET") {
          if (!isLoggedIn) return unauthorised();
          return ok(users);
        }

        realFetch(input, init)
          .then((response) => resolve(response))
          .catch((err) => reject(err));

        function ok(body: any) {
          resolve(new Response(JSON.stringify(body), { status: 200 }));
        }

        function unauthorised() {
          resolve(new Response(JSON.stringify({ message: "Unauthorised" }), { status: 401 }));
        }

        function error(message: string) {
          resolve(new Response(JSON.stringify({ message }), { status: 400 }));
        }
      }, 500);
    });
  } as any;
};

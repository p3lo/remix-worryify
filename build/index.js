var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// empty-module:~/supabase.client
var require_supabase = __commonJS({
  "empty-module:~/supabase.client"(exports, module2) {
    init_react();
    module2.exports = {};
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\dslanicka\mern\remix\remix-worryify\app\root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  action: () => action,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix3 = __toESM(require_remix());

// app/auth.server.ts
init_react();
var import_remix2 = __toESM(require_remix());
var import_remix_auth = require("remix-auth");
var import_remix_auth_supabase = require("remix-auth-supabase");

// app/supabase.server.ts
init_react();
var import_supabase_js = require("@supabase/supabase-js");
if (!process.env.SUPABASE_URL)
  throw new Error("SUPABASE_URL is required");
if (!process.env.SUPABASE_SERVICE_KEY)
  throw new Error("SUPABASE_SERVICE_KEY is required");
var supabaseAdmin = (0, import_supabase_js.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY, {
  fetch: (...args) => fetch(...args)
});

// app/auth.server.ts
var sessionStorage = (0, import_remix2.createCookieSessionStorage)({
  cookie: {
    name: "sb",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [`${process.env.JWT_SECRET}`],
    secure: false
  }
});
var oAuthStrategy = new import_remix_auth_supabase.SupabaseStrategy({
  supabaseClient: supabaseAdmin,
  sessionStorage,
  sessionKey: "sb:session",
  sessionErrorKey: "sb:error"
}, async ({ req }) => {
  const form = await req.formData();
  const session = form == null ? void 0 : form.get("session");
  if (typeof session !== "string")
    throw new import_remix_auth.AuthorizationError("session not found");
  return JSON.parse(session);
});
var authenticator = new import_remix_auth.Authenticator(sessionStorage, {
  sessionKey: oAuthStrategy.sessionKey,
  sessionErrorKey: oAuthStrategy.sessionErrorKey
});
authenticator.use(oAuthStrategy, "sb-oauth");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-KNKSP6EZ.css";

// app/utils/db.server.ts
init_react();
var import_client = require("@prisma/client");
var db;
if (false) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// route:C:\Users\dslanicka\mern\remix\remix-worryify\app\root.tsx
var import_ri = require("react-icons/ri");
var loader = async ({ request }) => {
  var _a;
  const session = await oAuthStrategy.checkSession(request);
  let user;
  if (session) {
    user = await db.profiles.findUnique({
      where: {
        id: (_a = session.user) == null ? void 0 : _a.id
      }
    });
  }
  return {
    env: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      PUBLIC_SUPABASE_ANON_KEY: process.env.PUBLIC_SUPABASE_ANON_KEY
    },
    session,
    user
  };
};
var action = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: "/" });
};
var meta = () => {
  return { title: "WorryIfy" };
};
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
function CatchBoundary() {
  const caught = (0, import_remix3.useCatch)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Caught"), /* @__PURE__ */ React.createElement("p", null, "Status: ", caught.status), /* @__PURE__ */ React.createElement("pre", null, /* @__PURE__ */ React.createElement("code", null, JSON.stringify(caught.data, null, 2))));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("p", null, "The stack trace is:"), /* @__PURE__ */ React.createElement("pre", null, error.stack));
}
function App() {
  return /* @__PURE__ */ React.createElement(Document, {
    title: "WorryIfy"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null)));
}
function Document({ children, title }) {
  const { env } = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    "data-theme": "dark"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `window.env = ${JSON.stringify(env)}`
    }
  }), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}
function Layout({ children }) {
  const { session, user } = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-between h-screen"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "mb-10 shadow-xl navbar bg-base-100 rounded-box"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " navbar-start"
  }), /* @__PURE__ */ React.createElement("div", {
    className: " navbar-center"
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-center space-x-2"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-xl px-[2px] bg-white text-gray-700 font-semibold select-none"
  }, "WI"), /* @__PURE__ */ React.createElement("p", {
    className: "text-xl font-bold select-none"
  }, "WorryIfy")))), /* @__PURE__ */ React.createElement("div", {
    className: "navbar-end"
  }, session ? /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/add",
    className: "btn btn-circle btn-sm"
  }, /* @__PURE__ */ React.createElement(import_ri.RiAddLine, {
    className: "w-8 h-8 fill-current"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "dropdown dropdown-end"
  }, /* @__PURE__ */ React.createElement("label", {
    tabIndex: 0,
    className: "btn btn-ghost btn-circle avatar"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-10 rounded-full"
  }, /* @__PURE__ */ React.createElement("img", {
    src: user.avatar_url
  }))), /* @__PURE__ */ React.createElement("ul", {
    tabIndex: 0,
    className: "p-2 mt-3 shadow-xl menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/profile"
  }, "Profile")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/my-worries?page=1"
  }, "My worries")), /* @__PURE__ */ React.createElement("div", {
    className: "pt-1 border-b border-gray-500 "
  }), /* @__PURE__ */ React.createElement("li", {
    className: "mt-1"
  }, /* @__PURE__ */ React.createElement(import_remix3.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", null, "Logout")))))) : /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/login"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "btn btn-outline btn-sm"
  }, "Login")))), /* @__PURE__ */ React.createElement("main", {
    className: "flex-grow"
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, children)), /* @__PURE__ */ React.createElement("footer", {
    className: "items-center p-4 footer bg-neutral text-neutral-content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "items-center grid-flow-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-[36px] h-[36px] bg-white"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-2xl px-[2px] bg-white text-gray-700 font-semibold select-none"
  }, "WI")), /* @__PURE__ */ React.createElement("p", null, "Copyright \xA9 2022 - All right reserved")), /* @__PURE__ */ React.createElement("div", {
    className: "grid-flow-col gap-4 md:place-self-center md:justify-self-end"
  }, /* @__PURE__ */ React.createElement("a", null, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    className: "fill-current"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
  }))), /* @__PURE__ */ React.createElement("a", null, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    className: "fill-current"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
  }))), /* @__PURE__ */ React.createElement("a", null, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    className: "fill-current"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
  }))))));
}

// route:C:\Users\dslanicka\mern\remix\remix-worryify\app\routes\oauth.callback.tsx
var oauth_callback_exports = {};
__export(oauth_callback_exports, {
  action: () => action2,
  default: () => OAuth
});
init_react();
var import_react = require("react");
var import_remix4 = __toESM(require_remix());
var import_supabase2 = __toESM(require_supabase());
var action2 = async ({ request }) => {
  await authenticator.authenticate("sb-oauth", request, {
    successRedirect: "/",
    failureRedirect: "/login"
  });
};
function OAuth() {
  const submit = (0, import_remix4.useSubmit)();
  (0, import_react.useEffect)(() => {
    const { data: authListener } = import_supabase2.supabaseClient.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        const formData = new FormData();
        formData.append("session", JSON.stringify(session));
        submit(formData, { method: "post" });
      }
    });
    return () => {
      authListener == null ? void 0 : authListener.unsubscribe();
    };
  }, [submit]);
  return null;
}

// route:C:\Users\dslanicka\mern\remix\remix-worryify\app\routes\my-worries.tsx
var my_worries_exports = {};
__export(my_worries_exports, {
  default: () => my_worries_default,
  loader: () => loader2
});
init_react();
var import_remix5 = __toESM(require_remix());
var loader2 = async ({ request }) => {
  await oAuthStrategy.checkSession(request, {
    failureRedirect: "/login"
  });
  return {};
};
var MW = () => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix5.Outlet, null));
};
var my_worries_default = MW;

// route:C:\Users\dslanicka\mern\remix\remix-worryify\app\routes\my-worries\$id.edit.tsx
var id_edit_exports = {};
__export(id_edit_exports, {
  action: () => action3,
  default: () => id_edit_default,
  loader: () => loader3
});
init_react();
var import_remix6 = __toESM(require_remix());
var loader3 = async ({ request, params }) => {
  var _a;
  const user = await oAuthStrategy.checkSession(request, {
    failureRedirect: "/login"
  });
  let worry_id = params.id;
  let data;
  if (worry_id) {
    data = await db.posts.findFirst({
      where: {
        id: +worry_id,
        authorId: (_a = user.user) == null ? void 0 : _a.id
      }
    });
  }
  if (data) {
    return { data };
  } else {
    return (0, import_remix6.redirect)("/my-worries?page=1");
  }
};
var action3 = async ({ request, params }) => {
  var _a;
  const formData = await request.formData();
  const worry = (_a = formData.get("worry")) == null ? void 0 : _a.toString();
  let worry_id = params.id;
  if (worry && worry_id) {
    let isAnon;
    if (formData.get("anonymously")) {
      isAnon = true;
    } else {
      isAnon = false;
    }
    await db.posts.update({
      where: {
        id: +worry_id
      },
      data: {
        post: worry,
        is_anon: isAnon
      }
    });
  }
  return (0, import_remix6.redirect)("/my-worries?page=1");
};
function WorryEdit() {
  const { data } = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center justify-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl font-bold"
  }, "Edit your worry")), /* @__PURE__ */ React.createElement(import_remix6.Form, {
    className: "flex flex-col items-center justify-center my-5 space-y-3",
    method: "post"
  }, /* @__PURE__ */ React.createElement("textarea", {
    className: "w-1/2 textarea textarea-bordered",
    placeholder: "Your worry",
    name: "worry",
    defaultValue: data.post
  }), /* @__PURE__ */ React.createElement("label", {
    className: "cursor-pointer label"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "mr-2 label-text"
  }, "Post anonymously"), /* @__PURE__ */ React.createElement("input", {
    defaultChecked: data.is_anon,
    type: "checkbox",
    className: "checkbox checkbox-sm",
    name: "anonymously"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "btn w-[200px]"
  }, "Edit")));
}
var id_edit_default = WorryEdit;

// route:C:\Users\dslanicka\mern\remix\remix-worryify\app\routes\my-worries\index.tsx
var my_worries_exports2 = {};
__export(my_worries_exports2, {
  action: () => action4,
  default: () => MyWorries,
  loader: () => loader4
});
init_react();
var import_remix7 = __toESM(require_remix());
var import_ri2 = require("react-icons/ri");
var loader4 = async ({ request, params }) => {
  var _a, _b;
  const session = await oAuthStrategy.checkSession(request, {
    failureRedirect: "/login"
  });
  const url = new URL(request.url);
  let page_s = url.searchParams.get("page");
  if (!page_s || !+page_s)
    return (0, import_remix7.redirect)("/my-worries?page=1");
  let page = +page_s;
  let worries, pages, arr_pages;
  if (session) {
    const posts_count = await db.posts.count({
      where: {
        authorId: (_a = session.user) == null ? void 0 : _a.id
      }
    });
    pages = posts_count / 10;
    if (pages === 0)
      pages = 1;
    let zvysok = posts_count % 10;
    if (zvysok > 0)
      pages = Math.floor(pages) + 1;
    let skip = 0;
    if (page > 1)
      skip = (page - 1) * 10;
    if (page > pages)
      return (0, import_remix7.redirect)("/my-worries?page=1");
    arr_pages = Array(pages).fill(0).map((_, i) => i++);
    worries = await db.posts.findMany({
      orderBy: {
        created_at: "desc"
      },
      skip,
      take: 10,
      where: {
        authorId: (_b = session.user) == null ? void 0 : _b.id
      },
      include: {
        author: {
          select: {
            user_name: true,
            avatar_url: true
          }
        },
        _count: {
          select: {
            comments: true
          }
        }
      }
    });
  }
  return { worries, page, arr_pages };
};
var action4 = async ({ request }) => {
  const formData = await request.formData();
  const worryId = formData.get("worryId");
  if (worryId) {
    if (formData.get("_action") === "delete") {
      await db.posts.delete({
        where: {
          id: +worryId
        }
      });
    }
    if (formData.get("_action") === "edit") {
      return (0, import_remix7.redirect)(`/my-worries/${worryId}/edit`);
    }
  }
  return null;
};
function getDate(date) {
  const created = new Date(date);
  const day = created.getDate();
  const month = created.getMonth();
  const year = created.getFullYear();
  return month + 1 + "/" + day + "/" + year;
}
function MyWorries() {
  const { worries, page, arr_pages } = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", {
    className: "flex items-center justify-center w-full text-xl font-semibold"
  }, "Your worries"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-5 w-[95%] sm:w-[85%] md:w-[75%] border mx-auto border-gray-500"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, worries.length > 0 ? worries.map((item) => {
    var _a;
    return /* @__PURE__ */ React.createElement("div", {
      key: item.id,
      className: "flex hover:bg-gray-700"
    }, /* @__PURE__ */ React.createElement(import_remix7.Link, {
      to: `/${item.id}`,
      className: "flex flex-col flex-grow p-3 cursor-pointer "
    }, /* @__PURE__ */ React.createElement("div", {
      className: "line-clamp-3"
    }, /* @__PURE__ */ React.createElement("p", {
      className: "text-sm text-gray-300 first-line:font-semibold first-line:text-base first-line:text-white"
    }, item.post)), /* @__PURE__ */ React.createElement("div", {
      className: "flex space-x-2 text-xs text-gray-400"
    }, item.is_anon ? /* @__PURE__ */ React.createElement("p", null, "Anonym") : /* @__PURE__ */ React.createElement("p", null, (_a = item.author) == null ? void 0 : _a.user_name), /* @__PURE__ */ React.createElement("div", {
      className: "border-r border-gray-500"
    }), /* @__PURE__ */ React.createElement("p", null, "Comments: ", item._count.comments), /* @__PURE__ */ React.createElement("div", {
      className: "border-r border-gray-500"
    }), /* @__PURE__ */ React.createElement("p", null, getDate(item.created_at)))), /* @__PURE__ */ React.createElement(import_remix7.Form, {
      method: "post",
      className: "flex items-start justify-center px-2 py-4 space-x-2"
    }, /* @__PURE__ */ React.createElement("input", {
      type: "hidden",
      name: "worryId",
      value: item.id
    }), /* @__PURE__ */ React.createElement("button", {
      type: "submit",
      name: "_action",
      value: "delete"
    }, /* @__PURE__ */ React.createElement(import_ri2.RiDeleteBin6Line, {
      className: "w-4 h-4 text-red-500 transition duration-150 ease-out transform cursor-pointer hover:scale-125"
    })), /* @__PURE__ */ React.createElement("button", {
      type: "submit",
      name: "_action",
      value: "edit"
    }, /* @__PURE__ */ React.createElement(import_ri2.RiEditLine, {
      className: "w-4 h-4 text-blue-500 transition duration-150 ease-out transform cursor-pointer hover:scale-125"
    }))));
  }) : /* @__PURE__ */ React.createElement("p", {
    className: "flex justify-center py-5 text-sm text-gray-400"
  }, "Nothing found yet"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center mb-5 btn-group"
  }, arr_pages.map((item) => /* @__PURE__ */ React.createElement(import_remix7.Link, {
    key: item,
    to: `/my-worries?page=${item + 1}`,
    className: `btn btn-xs ${item + 1 === page && "btn-active"}`
  }, item + 1))));
}

// route:C:\Users\dslanicka\mern\remix\remix-worryify\app\routes\$worry_id.tsx
var worry_id_exports = {};
__export(worry_id_exports, {
  action: () => action5,
  default: () => worry_id_default,
  loader: () => loader5
});
init_react();
var import_react2 = require("react");
var import_remix8 = __toESM(require_remix());
var loader5 = async ({ request, params }) => {
  var _a;
  const session = await oAuthStrategy.checkSession(request);
  let worry_id = params.worry_id;
  let user_id;
  if (session) {
    user_id = (_a = session.user) == null ? void 0 : _a.id;
  }
  let worry;
  if (worry_id) {
    worry = await db.posts.findUnique({
      where: {
        id: +worry_id
      },
      include: {
        author: {
          select: {
            user_name: true
          }
        },
        comments: {
          orderBy: {
            created_at: "desc"
          },
          include: {
            author: {
              select: {
                user_name: true,
                avatar_url: true
              }
            }
          }
        }
      }
    });
  }
  if (!worry) {
    return (0, import_remix8.redirect)("/");
  }
  return { worry, user_id };
};
var action5 = async ({ request }) => {
  const formData = await request.formData();
  const worryId = formData.get("worryId");
  const userId = formData.get("userId");
  const comment = formData.get("comment");
  if (!comment || !worryId || !userId) {
    return null;
  } else {
    await db.comments.create({
      data: {
        comment: comment.toString(),
        authorId: userId.toString(),
        postId: +worryId
      }
    });
  }
  return null;
};
function getDate2(date) {
  const created = new Date(date);
  const day = created.getDate();
  const month = created.getMonth();
  const year = created.getFullYear();
  return month + 1 + "/" + day + "/" + year;
}
function WorryId() {
  var _a, _b;
  const { worry, user_id } = (0, import_remix8.useLoaderData)();
  const transition = (0, import_remix8.useTransition)();
  let isAdding = transition.state === "submitting" && true;
  const formRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    var _a2;
    if (!isAdding) {
      (_a2 = formRef.current) == null ? void 0 : _a2.reset();
    }
  }, [isAdding]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "my-10 w-[95%] sm:w-[85%] md:w-[75%] mx-auto p-3 border-gray-500"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-1"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-sm"
  }, worry.post), /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-2 text-xs text-gray-400"
  }, worry.is_anon ? /* @__PURE__ */ React.createElement("p", null, "Anonym") : /* @__PURE__ */ React.createElement("p", null, (_a = worry.author) == null ? void 0 : _a.user_name), /* @__PURE__ */ React.createElement("div", {
    className: "border-r border-gray-500"
  }), /* @__PURE__ */ React.createElement("p", null, getDate2(worry.created_at)))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-3 border-b border-gray-500"
  }), user_id && /* @__PURE__ */ React.createElement(import_remix8.Form, {
    method: "post",
    className: "flex flex-col mt-5 space-y-2",
    ref: formRef
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "worryId",
    value: worry.id
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "userId",
    value: user_id
  }), /* @__PURE__ */ React.createElement("textarea", {
    className: "textarea textarea-bordered w-full sm:w-[75%] md:w-[50%]",
    placeholder: "Comment",
    name: "comment"
  }), /* @__PURE__ */ React.createElement("button", {
    disabled: isAdding,
    type: "submit",
    className: "btn btn-sm w-[200px]"
  }, isAdding ? "Saving..." : "Comment")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col my-5 space-y-4"
  }, (_b = worry.comments) == null ? void 0 : _b.map((item) => {
    var _a2, _b2;
    return /* @__PURE__ */ React.createElement("div", {
      key: item.id,
      className: "flex space-x-3"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "avatar"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "w-12 rounded-full"
    }, /* @__PURE__ */ React.createElement("img", {
      src: (_a2 = item.author) == null ? void 0 : _a2.avatar_url
    }))), /* @__PURE__ */ React.createElement("div", {
      className: "flex flex-col space-y-1"
    }, /* @__PURE__ */ React.createElement("p", {
      className: "text-sm"
    }, item.comment), /* @__PURE__ */ React.createElement("div", {
      className: "flex space-x-2 text-xs text-gray-400"
    }, /* @__PURE__ */ React.createElement("p", {
      className: ""
    }, (_b2 = item.author) == null ? void 0 : _b2.user_name), /* @__PURE__ */ React.createElement("div", {
      className: "border-r border-gray-500"
    }), /* @__PURE__ */ React.createElement("p", {
      className: ""
    }, getDate2(item.created_at)))));
  }))));
}
var worry_id_default = WorryId;

// route:C:\Users\dslanicka\mern\remix\remix-worryify\app\routes\profile.tsx
var profile_exports = {};
__export(profile_exports, {
  action: () => action6,
  default: () => Profile,
  loader: () => loader6
});
init_react();
var import_remix9 = __toESM(require_remix());
var import_remix10 = __toESM(require_remix());
var loader6 = async ({ request }) => {
  var _a;
  const session = await oAuthStrategy.checkSession(request, {
    failureRedirect: "/login"
  });
  let user;
  if (session) {
    user = await db.profiles.findUnique({
      where: {
        id: (_a = session.user) == null ? void 0 : _a.id
      }
    });
  }
  return { user };
};
var action6 = async ({ request }) => {
  var _a, _b, _c;
  const session = await oAuthStrategy.checkSession(request, {
    failureRedirect: "/login"
  });
  const formData = await request.formData();
  let user_name = (_a = formData.get("user_name")) == null ? void 0 : _a.toString();
  let email = (_b = formData.get("email")) == null ? void 0 : _b.toString();
  if (!user_name || !email) {
    return null;
  }
  const updateUser = await db.profiles.update({
    where: {
      id: (_c = session.user) == null ? void 0 : _c.id
    },
    data: {
      user_name,
      email
    }
  });
  return null;
};
function Profile() {
  const { user } = (0, import_remix10.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "w-full mt-[10vh]"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-center space-x-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "avatar"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "border border-gray-500 rounded-full w-44"
  }, /* @__PURE__ */ React.createElement("img", {
    src: user.avatar_url
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-2"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-5xl font-bold"
  }, user.user_name), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-400"
  }, user.email)))), /* @__PURE__ */ React.createElement(import_remix9.Form, {
    method: "post",
    className: "flex flex-col items-center justify-center my-[5vh] space-y-3"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "justify-center w-[50vh] input-group"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "w-[150px]"
  }, "Username"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "user_name",
    defaultValue: user.user_name,
    placeholder: "username",
    className: "w-full input input-bordered"
  })), /* @__PURE__ */ React.createElement("label", {
    className: "justify-center w-[50vh] input-group"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "w-[150px]"
  }, "Email"), /* @__PURE__ */ React.createElement("input", {
    type: "email",
    name: "email",
    placeholder: "Email",
    defaultValue: user.email,
    className: "w-full input input-bordered"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "btn w-[200px]"
  }, "Save")), /* @__PURE__ */ React.createElement(import_remix9.Outlet, null));
}

// route:C:\Users\dslanicka\mern\remix\remix-worryify\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader7
});
init_react();
var import_remix12 = __toESM(require_remix());

// app/components/Pagination.tsx
init_react();
var import_remix11 = __toESM(require_remix());
function Pagination({ page, arr_pages }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center mb-10 btn-group"
  }, arr_pages.map((item) => /* @__PURE__ */ React.createElement(import_remix11.Link, {
    key: item,
    to: `/?page=${item + 1}`,
    className: `btn btn-sm ${item + 1 === +page && "btn-active"}`
  }, item + 1)));
}
var Pagination_default = Pagination;

// route:C:\Users\dslanicka\mern\remix\remix-worryify\app\routes\index.tsx
var loader7 = async ({ request }) => {
  const url = new URL(request.url);
  let page = url.searchParams.get("page");
  if (!page || !+page)
    return (0, import_remix12.redirect)("/?page=1");
  let pages;
  const posts_count = await db.posts.count();
  pages = posts_count / 10;
  if (pages === 0)
    pages = 1;
  let zvysok = posts_count % 10;
  if (zvysok > 0)
    pages = Math.floor(pages) + 1;
  let skip = 0;
  if (+page > 1)
    skip = (+page - 1) * 10;
  if (+page > pages)
    return (0, import_remix12.redirect)("/?page=1");
  let arr_pages = Array(pages).fill(0).map((_, i) => i++);
  const all_posts = await db.posts.findMany({
    orderBy: {
      created_at: "desc"
    },
    skip,
    take: 10,
    include: {
      author: {
        select: {
          user_name: true,
          avatar_url: true
        }
      },
      _count: {
        select: {
          comments: true
        }
      }
    }
  });
  return { all_posts, arr_pages, page };
};
function getDate3(date) {
  const created = new Date(date);
  const day = created.getDate();
  const month = created.getMonth();
  const year = created.getFullYear();
  return month + 1 + "/" + day + "/" + year;
}
function Index() {
  const { all_posts, arr_pages, page } = (0, import_remix12.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center justify-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-xl"
  }, "Welcome to WorryIfy"), /* @__PURE__ */ React.createElement("p", null, "A place to let your worries go.")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-10 w-[95%] sm:w-[85%] md:w-[75%] border mx-auto border-gray-500"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col "
  }, all_posts.map((item) => /* @__PURE__ */ React.createElement(import_remix12.Link, {
    to: `/${item.id}`,
    key: item.id,
    className: "flex flex-col p-3 cursor-pointer hover:bg-gray-700"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "line-clamp-3"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-gray-300 first-line:font-semibold first-line:text-base first-line:text-white"
  }, item.post)), /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-2 text-xs text-gray-400"
  }, item.is_anon ? /* @__PURE__ */ React.createElement("p", null, "Anonym") : /* @__PURE__ */ React.createElement("p", null, item.author.user_name), /* @__PURE__ */ React.createElement("div", {
    className: "border-r border-gray-500"
  }), /* @__PURE__ */ React.createElement("p", null, "Comments: ", item._count.comments), /* @__PURE__ */ React.createElement("div", {
    className: "border-r border-gray-500"
  }), /* @__PURE__ */ React.createElement("p", null, getDate3(item.created_at))))))), /* @__PURE__ */ React.createElement(Pagination_default, {
    arr_pages,
    page
  }));
}

// route:C:\Users\dslanicka\mern\remix\remix-worryify\app\routes\login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Screen,
  loader: () => loader8
});
init_react();
var import_remix13 = __toESM(require_remix());
var import_supabase3 = __toESM(require_supabase());
var loader8 = async ({ request }) => {
  await oAuthStrategy.checkSession(request, {
    successRedirect: "/"
  });
  const session = await sessionStorage.getSession(request.headers.get("Cookie"));
  const error = session.get(authenticator.sessionErrorKey);
  return (0, import_remix13.json)({ error });
};
function Screen() {
  const { error } = (0, import_remix13.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, error && /* @__PURE__ */ React.createElement("div", null, error.message), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-5 w-full mt-[25vh]"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn mx-auto w-[250px]",
    onClick: () => (0, import_supabase3.signInWithGithub)()
  }, "Sign in with Github"), /* @__PURE__ */ React.createElement("button", {
    className: "btn mx-auto w-[250px]",
    onClick: () => (0, import_supabase3.signInWithGoogle)()
  }, "Sign in with Google")));
}

// route:C:\Users\dslanicka\mern\remix\remix-worryify\app\routes\add.tsx
var add_exports = {};
__export(add_exports, {
  action: () => action7,
  default: () => Add,
  loader: () => loader9
});
init_react();
var import_remix14 = __toESM(require_remix());
var loader9 = async ({ request }) => {
  await oAuthStrategy.checkSession(request, {
    failureRedirect: "/login"
  });
  return null;
};
var action7 = async ({ request }) => {
  var _a;
  const session = await oAuthStrategy.checkSession(request, {
    failureRedirect: "/login"
  });
  const formData = await request.formData();
  const worry = (_a = formData.get("worry")) == null ? void 0 : _a.toString();
  if (worry && session.user) {
    let isAnon;
    if (formData.get("anonymously")) {
      isAnon = true;
    } else {
      isAnon = false;
    }
    await db.posts.create({
      data: {
        post: worry,
        is_anon: isAnon,
        authorId: session.user.id
      }
    });
  }
  return (0, import_remix14.redirect)("/");
};
function Add() {
  const transition = (0, import_remix14.useTransition)();
  let isAdding = transition.state === "submitting" && true;
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center justify-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl font-bold"
  }, "Add your worry"), /* @__PURE__ */ React.createElement("p", {
    className: "text-sm"
  }, "and let it go")), /* @__PURE__ */ React.createElement(import_remix14.Form, {
    className: "flex flex-col items-center justify-center my-5 space-y-3",
    method: "post"
  }, /* @__PURE__ */ React.createElement("textarea", {
    className: "w-1/2 textarea textarea-bordered",
    placeholder: "Your worry",
    name: "worry"
  }), /* @__PURE__ */ React.createElement("label", {
    className: "cursor-pointer label"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "mr-2 label-text"
  }, "Post anonymously"), /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    className: "checkbox checkbox-sm",
    name: "anonymously"
  })), /* @__PURE__ */ React.createElement("button", {
    disabled: isAdding,
    type: "submit",
    className: "btn w-[200px]"
  }, isAdding ? "Saving..." : "Post")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "2edb0693", "entry": { "module": "/build/entry.client-QDYU6LV5.js", "imports": ["/build/_shared/chunk-3YPYD2ST.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-LEXR2QR6.js", "imports": ["/build/_shared/chunk-EGKPMNH2.js", "/build/_shared/chunk-TRXEZ7JQ.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/$worry_id": { "id": "routes/$worry_id", "parentId": "root", "path": ":worry_id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$worry_id-YY55B7A2.js", "imports": ["/build/_shared/chunk-5JOLX26B.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/add": { "id": "routes/add", "parentId": "root", "path": "add", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/add-UACXYTMV.js", "imports": ["/build/_shared/chunk-5JOLX26B.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-5CBM5L4A.js", "imports": ["/build/_shared/chunk-5JOLX26B.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-5WELCMEL.js", "imports": ["/build/_shared/chunk-ZNUUOS2E.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/my-worries": { "id": "routes/my-worries", "parentId": "root", "path": "my-worries", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/my-worries-YYQWBHPJ.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/my-worries/$id.edit": { "id": "routes/my-worries/$id.edit", "parentId": "routes/my-worries", "path": ":id/edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/my-worries/$id.edit-PC74NR7D.js", "imports": ["/build/_shared/chunk-5JOLX26B.js", "/build/_shared/chunk-TRXEZ7JQ.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/my-worries/index": { "id": "routes/my-worries/index", "parentId": "routes/my-worries", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/my-worries/index-WBECAN4Y.js", "imports": ["/build/_shared/chunk-EGKPMNH2.js", "/build/_shared/chunk-5JOLX26B.js", "/build/_shared/chunk-TRXEZ7JQ.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/oauth.callback": { "id": "routes/oauth.callback", "parentId": "root", "path": "oauth/callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/oauth.callback-OFPS725R.js", "imports": ["/build/_shared/chunk-ZNUUOS2E.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/profile": { "id": "routes/profile", "parentId": "root", "path": "profile", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/profile-WXB5WSHT.js", "imports": ["/build/_shared/chunk-5JOLX26B.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-2EDB0693.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/oauth.callback": {
    id: "routes/oauth.callback",
    parentId: "root",
    path: "oauth/callback",
    index: void 0,
    caseSensitive: void 0,
    module: oauth_callback_exports
  },
  "routes/my-worries": {
    id: "routes/my-worries",
    parentId: "root",
    path: "my-worries",
    index: void 0,
    caseSensitive: void 0,
    module: my_worries_exports
  },
  "routes/my-worries/$id.edit": {
    id: "routes/my-worries/$id.edit",
    parentId: "routes/my-worries",
    path: ":id/edit",
    index: void 0,
    caseSensitive: void 0,
    module: id_edit_exports
  },
  "routes/my-worries/index": {
    id: "routes/my-worries/index",
    parentId: "routes/my-worries",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: my_worries_exports2
  },
  "routes/$worry_id": {
    id: "routes/$worry_id",
    parentId: "root",
    path: ":worry_id",
    index: void 0,
    caseSensitive: void 0,
    module: worry_id_exports
  },
  "routes/profile": {
    id: "routes/profile",
    parentId: "root",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: profile_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/add": {
    id: "routes/add",
    parentId: "root",
    path: "add",
    index: void 0,
    caseSensitive: void 0,
    module: add_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICJlbXB0eS1tb2R1bGU6fi9zdXBhYmFzZS5jbGllbnQiLCAiPHN0ZGluPiIsICJzZXJ2ZXItZW50cnktbW9kdWxlOkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCIsICIuLi9hcHAvZW50cnkuc2VydmVyLnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXGRzbGFuaWNrYVxcbWVyblxccmVtaXhcXHJlbWl4LXdvcnJ5aWZ5XFxhcHBcXHJvb3QudHN4IiwgIi4uL2FwcC9hdXRoLnNlcnZlci50cyIsICIuLi9hcHAvc3VwYWJhc2Uuc2VydmVyLnRzIiwgIi4uL2FwcC91dGlscy9kYi5zZXJ2ZXIudHMiLCAicm91dGU6QzpcXFVzZXJzXFxkc2xhbmlja2FcXG1lcm5cXHJlbWl4XFxyZW1peC13b3JyeWlmeVxcYXBwXFxyb3V0ZXNcXG9hdXRoLmNhbGxiYWNrLnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXGRzbGFuaWNrYVxcbWVyblxccmVtaXhcXHJlbWl4LXdvcnJ5aWZ5XFxhcHBcXHJvdXRlc1xcbXktd29ycmllcy50c3giLCAicm91dGU6QzpcXFVzZXJzXFxkc2xhbmlja2FcXG1lcm5cXHJlbWl4XFxyZW1peC13b3JyeWlmeVxcYXBwXFxyb3V0ZXNcXG15LXdvcnJpZXNcXCRpZC5lZGl0LnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXGRzbGFuaWNrYVxcbWVyblxccmVtaXhcXHJlbWl4LXdvcnJ5aWZ5XFxhcHBcXHJvdXRlc1xcbXktd29ycmllc1xcaW5kZXgudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcZHNsYW5pY2thXFxtZXJuXFxyZW1peFxccmVtaXgtd29ycnlpZnlcXGFwcFxccm91dGVzXFwkd29ycnlfaWQudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcZHNsYW5pY2thXFxtZXJuXFxyZW1peFxccmVtaXgtd29ycnlpZnlcXGFwcFxccm91dGVzXFxwcm9maWxlLnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXGRzbGFuaWNrYVxcbWVyblxccmVtaXhcXHJlbWl4LXdvcnJ5aWZ5XFxhcHBcXHJvdXRlc1xcaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1BhZ2luYXRpb24udHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcZHNsYW5pY2thXFxtZXJuXFxyZW1peFxccmVtaXgtd29ycnlpZnlcXGFwcFxccm91dGVzXFxsb2dpbi50c3giLCAicm91dGU6QzpcXFVzZXJzXFxkc2xhbmlja2FcXG1lcm5cXHJlbWl4XFxyZW1peC13b3JyeWlmeVxcYXBwXFxyb3V0ZXNcXGFkZC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxkc2xhbmlja2FcXFxcbWVyblxcXFxyZW1peFxcXFxyZW1peC13b3JyeWlmeVxcXFxhcHBcXFxcZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxkc2xhbmlja2FcXFxcbWVyblxcXFxyZW1peFxcXFxyZW1peC13b3JyeWlmeVxcXFxhcHBcXFxccm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZHNsYW5pY2thXFxcXG1lcm5cXFxccmVtaXhcXFxccmVtaXgtd29ycnlpZnlcXFxcYXBwXFxcXHJvdXRlc1xcXFxvYXV0aC5jYWxsYmFjay50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZHNsYW5pY2thXFxcXG1lcm5cXFxccmVtaXhcXFxccmVtaXgtd29ycnlpZnlcXFxcYXBwXFxcXHJvdXRlc1xcXFxteS13b3JyaWVzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxkc2xhbmlja2FcXFxcbWVyblxcXFxyZW1peFxcXFxyZW1peC13b3JyeWlmeVxcXFxhcHBcXFxccm91dGVzXFxcXG15LXdvcnJpZXNcXFxcJGlkLmVkaXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGRzbGFuaWNrYVxcXFxtZXJuXFxcXHJlbWl4XFxcXHJlbWl4LXdvcnJ5aWZ5XFxcXGFwcFxcXFxyb3V0ZXNcXFxcbXktd29ycmllc1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZHNsYW5pY2thXFxcXG1lcm5cXFxccmVtaXhcXFxccmVtaXgtd29ycnlpZnlcXFxcYXBwXFxcXHJvdXRlc1xcXFwkd29ycnlfaWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGRzbGFuaWNrYVxcXFxtZXJuXFxcXHJlbWl4XFxcXHJlbWl4LXdvcnJ5aWZ5XFxcXGFwcFxcXFxyb3V0ZXNcXFxccHJvZmlsZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZHNsYW5pY2thXFxcXG1lcm5cXFxccmVtaXhcXFxccmVtaXgtd29ycnlpZnlcXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZHNsYW5pY2thXFxcXG1lcm5cXFxccmVtaXhcXFxccmVtaXgtd29ycnlpZnlcXFxcYXBwXFxcXHJvdXRlc1xcXFxsb2dpbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZHNsYW5pY2thXFxcXG1lcm5cXFxccmVtaXhcXFxccmVtaXgtd29ycnlpZnlcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZGQudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9vYXV0aC5jYWxsYmFja1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvb2F1dGguY2FsbGJhY2tcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwib2F1dGgvY2FsbGJhY2tcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL215LXdvcnJpZXNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL215LXdvcnJpZXNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibXktd29ycmllc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvbXktd29ycmllcy8kaWQuZWRpdFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbXktd29ycmllcy8kaWQuZWRpdFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL215LXdvcnJpZXNcIixcbiAgICAgIHBhdGg6IFwiOmlkL2VkaXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL215LXdvcnJpZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL215LXdvcnJpZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9teS13b3JyaWVzXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvJHdvcnJ5X2lkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy8kd29ycnlfaWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiOndvcnJ5X2lkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9wcm9maWxlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcm9maWxlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInByb2ZpbGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2xvZ2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZGRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWRkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTlcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXHJcbiAgcmVxdWVzdDogUmVxdWVzdCxcclxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcclxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXHJcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcclxuKSB7XHJcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXHJcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxyXG4gICk7XHJcblxyXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XHJcblxyXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xyXG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXHJcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcclxuICB9KTtcclxufVxyXG4iLCAiaW1wb3J0IHtcclxuICBBY3Rpb25GdW5jdGlvbixcclxuICBGb3JtLFxyXG4gIExpbmssXHJcbiAgTGlua3MsXHJcbiAgTGl2ZVJlbG9hZCxcclxuICBMb2FkZXJGdW5jdGlvbixcclxuICBNZXRhLFxyXG4gIE91dGxldCxcclxuICBTY3JpcHRzLFxyXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxyXG4gIHVzZUNhdGNoLFxyXG4gIHVzZUxvYWRlckRhdGEsXHJcbn0gZnJvbSAncmVtaXgnO1xyXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4JztcclxuaW1wb3J0IHsgYXV0aGVudGljYXRvciwgb0F1dGhTdHJhdGVneSB9IGZyb20gJ34vYXV0aC5zZXJ2ZXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGFpbHdpbmQuY3NzJztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuL3V0aWxzL2RiLnNlcnZlcic7XHJcbmltcG9ydCB7IFJpQWRkTGluZSB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IG9BdXRoU3RyYXRlZ3kuY2hlY2tTZXNzaW9uKHJlcXVlc3QpO1xyXG4gIGxldCB1c2VyO1xyXG4gIGlmIChzZXNzaW9uKSB7XHJcbiAgICB1c2VyID0gYXdhaXQgZGIucHJvZmlsZXMuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaWQ6IHNlc3Npb24udXNlcj8uaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIGVudjoge1xyXG4gICAgICBTVVBBQkFTRV9VUkw6IHByb2Nlc3MuZW52LlNVUEFCQVNFX1VSTCxcclxuICAgICAgUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZOiBwcm9jZXNzLmVudi5QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVksXHJcbiAgICB9LFxyXG4gICAgc2Vzc2lvbixcclxuICAgIHVzZXIsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgYXdhaXQgYXV0aGVudGljYXRvci5sb2dvdXQocmVxdWVzdCwgeyByZWRpcmVjdFRvOiAnLycgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHRpdGxlOiAnV29ycnlJZnknIH07XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xyXG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+Q2F1Z2h0PC9oMT5cclxuICAgICAgPHA+U3RhdHVzOiB7Y2F1Z2h0LnN0YXR1c308L3A+XHJcbiAgICAgIDxwcmU+XHJcbiAgICAgICAgPGNvZGU+e0pTT04uc3RyaW5naWZ5KGNhdWdodC5kYXRhLCBudWxsLCAyKX08L2NvZGU+XHJcbiAgICAgIDwvcHJlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPkVycm9yPC9oMT5cclxuICAgICAgPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPlxyXG4gICAgICA8cD5UaGUgc3RhY2sgdHJhY2UgaXM6PC9wPlxyXG4gICAgICA8cHJlPntlcnJvci5zdGFja308L3ByZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERvY3VtZW50IHRpdGxlPVwiV29ycnlJZnlcIj5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9Eb2N1bWVudD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEb2N1bWVudCh7IGNoaWxkcmVuLCB0aXRsZSB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7IHRpdGxlPzogc3RyaW5nIH0pIHtcclxuICBjb25zdCB7IGVudiB9ID0gdXNlTG9hZGVyRGF0YTxXaW5kb3c+KCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aHRtbCBsYW5nPVwiZW5cIiBkYXRhLXRoZW1lPVwiZGFya1wiPlxyXG4gICAgICA8aGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICB7dGl0bGUgPyA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+IDogbnVsbH1cclxuICAgICAgICA8TWV0YSAvPlxyXG4gICAgICAgIDxMaW5rcyAvPlxyXG4gICAgICA8L2hlYWQ+XHJcbiAgICAgIDxib2R5PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICBfX2h0bWw6IGB3aW5kb3cuZW52ID0gJHtKU09OLnN0cmluZ2lmeShlbnYpfWAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFNjcmlwdHMgLz5cclxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxyXG4gICAgICA8L2JvZHk+XHJcbiAgICA8L2h0bWw+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48e30+KSB7XHJcbiAgY29uc3QgeyBzZXNzaW9uLCB1c2VyIH0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gaC1zY3JlZW5cIj5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJtYi0xMCBzaGFkb3cteGwgbmF2YmFyIGJnLWJhc2UtMTAwIHJvdW5kZWQtYm94XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbmF2YmFyLXN0YXJ0XCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbmF2YmFyLWNlbnRlclwiPlxyXG4gICAgICAgICAgPExpbmsgdG89XCIvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBweC1bMnB4XSBiZy13aGl0ZSB0ZXh0LWdyYXktNzAwIGZvbnQtc2VtaWJvbGQgc2VsZWN0LW5vbmVcIj5XSTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBzZWxlY3Qtbm9uZVwiPldvcnJ5SWZ5PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1lbmRcIj5cclxuICAgICAgICAgIHtzZXNzaW9uID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2FkZFwiIGNsYXNzTmFtZT1cImJ0biBidG4tY2lyY2xlIGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgPFJpQWRkTGluZSBjbGFzc05hbWU9XCJ3LTggaC04IGZpbGwtY3VycmVudFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGRyb3Bkb3duLWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIHRhYkluZGV4PXswfSBjbGFzc05hbWU9XCJidG4gYnRuLWdob3N0IGJ0bi1jaXJjbGUgYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCByb3VuZGVkLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJfdXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBtdC0zIHNoYWRvdy14bCBtZW51IG1lbnUtY29tcGFjdCBkcm9wZG93bi1jb250ZW50IGJnLWJhc2UtMTAwIHJvdW5kZWQtYm94IHctNTJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvZmlsZVwiPlByb2ZpbGU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbXktd29ycmllcz9wYWdlPTFcIj5NeSB3b3JyaWVzPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEgYm9yZGVyLWIgYm9yZGVyLWdyYXktNTAwIFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtdC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5Mb2dvdXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUgYnRuLXNtXCI+TG9naW48L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIHAtNCBmb290ZXIgYmctbmV1dHJhbCB0ZXh0LW5ldXRyYWwtY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIGdyaWQtZmxvdy1jb2xcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMzZweF0gaC1bMzZweF0gYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgcHgtWzJweF0gYmctd2hpdGUgdGV4dC1ncmF5LTcwMCBmb250LXNlbWlib2xkIHNlbGVjdC1ub25lXCI+V0k8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8cD5Db3B5cmlnaHQgXHUwMEE5IDIwMjIgLSBBbGwgcmlnaHQgcmVzZXJ2ZWQ8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWZsb3ctY29sIGdhcC00IG1kOnBsYWNlLXNlbGYtY2VudGVyIG1kOmp1c3RpZnktc2VsZi1lbmRcIj5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50XCI+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNCA0LjU1N2MtLjg4My4zOTItMS44MzIuNjU2LTIuODI4Ljc3NSAxLjAxNy0uNjA5IDEuNzk4LTEuNTc0IDIuMTY1LTIuNzI0LS45NTEuNTY0LTIuMDA1Ljk3NC0zLjEyNyAxLjE5NS0uODk3LS45NTctMi4xNzgtMS41NTUtMy41OTQtMS41NTUtMy4xNzkgMC01LjUxNSAyLjk2Ni00Ljc5NyA2LjA0NS00LjA5MS0uMjA1LTcuNzE5LTIuMTY1LTEwLjE0OC01LjE0NC0xLjI5IDIuMjEzLS42NjkgNS4xMDggMS41MjMgNi41NzQtLjgwNi0uMDI2LTEuNTY2LS4yNDctMi4yMjktLjYxNi0uMDU0IDIuMjgxIDEuNTgxIDQuNDE1IDMuOTQ5IDQuODktLjY5My4xODgtMS40NTIuMjMyLTIuMjI0LjA4NC42MjYgMS45NTYgMi40NDQgMy4zNzkgNC42IDMuNDE5LTIuMDcgMS42MjMtNC42NzggMi4zNDgtNy4yOSAyLjA0IDIuMTc5IDEuMzk3IDQuNzY4IDIuMjEyIDcuNTQ4IDIuMjEyIDkuMTQyIDAgMTQuMzA3LTcuNzIxIDEzLjk5NS0xNC42NDYuOTYyLS42OTUgMS43OTctMS41NjIgMi40NTctMi41NDl6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50XCI+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOS42MTUgMy4xODRjLTMuNjA0LS4yNDYtMTEuNjMxLS4yNDUtMTUuMjMgMC0zLjg5Ny4yNjYtNC4zNTYgMi42Mi00LjM4NSA4LjgxNi4wMjkgNi4xODUuNDg0IDguNTQ5IDQuMzg1IDguODE2IDMuNi4yNDUgMTEuNjI2LjI0NiAxNS4yMyAwIDMuODk3LS4yNjYgNC4zNTYtMi42MiA0LjM4NS04LjgxNi0uMDI5LTYuMTg1LS40ODQtOC41NDktNC4zODUtOC44MTZ6bS0xMC42MTUgMTIuODE2di04bDggMy45OTMtOCA0LjAwN3pcIj48L3BhdGg+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnRcIj5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTkgOGgtM3Y0aDN2MTJoNXYtMTJoMy42NDJsLjM1OC00aC00di0xLjY2N2MwLS45NTUuMTkyLTEuMzMzIDEuMTE1LTEuMzMzaDIuODg1di01aC0zLjgwOGMtMy41OTYgMC01LjE5MiAxLjU4My01LjE5MiA0LjYxNXYzLjM4NXpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlIH0gZnJvbSAncmVtaXgnO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdG9yLCBBdXRob3JpemF0aW9uRXJyb3IgfSBmcm9tICdyZW1peC1hdXRoJztcclxuaW1wb3J0IHsgU3VwYWJhc2VTdHJhdGVneSB9IGZyb20gJ3JlbWl4LWF1dGgtc3VwYWJhc2UnO1xyXG5pbXBvcnQgeyBzdXBhYmFzZUFkbWluIH0gZnJvbSAnfi9zdXBhYmFzZS5zZXJ2ZXInO1xyXG5pbXBvcnQgdHlwZSB7IFNlc3Npb24gfSBmcm9tICd+L3N1cGFiYXNlLnNlcnZlcic7XHJcblxyXG5leHBvcnQgY29uc3Qgc2Vzc2lvblN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XHJcbiAgY29va2llOiB7XHJcbiAgICBuYW1lOiAnc2InLFxyXG4gICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBzYW1lU2l0ZTogJ2xheCcsXHJcbiAgICBzZWNyZXRzOiBbYCR7cHJvY2Vzcy5lbnYuSldUX1NFQ1JFVH1gXSwgLy8gVGhpcyBzaG91bGQgYmUgYW4gZW52IHZhcmlhYmxlXHJcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgb0F1dGhTdHJhdGVneSA9IG5ldyBTdXBhYmFzZVN0cmF0ZWd5KFxyXG4gIHtcclxuICAgIHN1cGFiYXNlQ2xpZW50OiBzdXBhYmFzZUFkbWluLFxyXG4gICAgc2Vzc2lvblN0b3JhZ2UsXHJcbiAgICBzZXNzaW9uS2V5OiAnc2I6c2Vzc2lvbicsXHJcbiAgICBzZXNzaW9uRXJyb3JLZXk6ICdzYjplcnJvcicsXHJcbiAgfSxcclxuICBhc3luYyAoeyByZXEgfSkgPT4ge1xyXG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcS5mb3JtRGF0YSgpO1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGZvcm0/LmdldCgnc2Vzc2lvbicpO1xyXG5cclxuICAgIGlmICh0eXBlb2Ygc2Vzc2lvbiAhPT0gJ3N0cmluZycpIHRocm93IG5ldyBBdXRob3JpemF0aW9uRXJyb3IoJ3Nlc3Npb24gbm90IGZvdW5kJyk7XHJcblxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc2Vzc2lvbik7XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0b3IgPSBuZXcgQXV0aGVudGljYXRvcjxTZXNzaW9uPihzZXNzaW9uU3RvcmFnZSwge1xyXG4gIHNlc3Npb25LZXk6IG9BdXRoU3RyYXRlZ3kuc2Vzc2lvbktleSxcclxuICBzZXNzaW9uRXJyb3JLZXk6IG9BdXRoU3RyYXRlZ3kuc2Vzc2lvbkVycm9yS2V5LFxyXG59KTtcclxuXHJcbmF1dGhlbnRpY2F0b3IudXNlKG9BdXRoU3RyYXRlZ3ksICdzYi1vYXV0aCcpO1xyXG4iLCAiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcclxuaW1wb3J0IHR5cGUgeyBTZXNzaW9uIH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBuYW1lc3BhY2UgTm9kZUpTIHtcclxuICAgIGludGVyZmFjZSBQcm9jZXNzRW52IHtcclxuICAgICAgU1VQQUJBU0VfVVJMOiBzdHJpbmc7XHJcbiAgICAgIFNVUEFCQVNFX1NFUlZJQ0VfS0VZOiBzdHJpbmc7XHJcbiAgICAgIFBVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWTogc3RyaW5nO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaWYgKCFwcm9jZXNzLmVudi5TVVBBQkFTRV9VUkwpIHRocm93IG5ldyBFcnJvcignU1VQQUJBU0VfVVJMIGlzIHJlcXVpcmVkJyk7XHJcblxyXG5pZiAoIXByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfS0VZKSB0aHJvdyBuZXcgRXJyb3IoJ1NVUEFCQVNFX1NFUlZJQ0VfS0VZIGlzIHJlcXVpcmVkJyk7XHJcblxyXG4vLyBTdXBhYmFzZSBvcHRpb25zIGV4YW1wbGUgKGJ1aWxkIHlvdXIgb3duIDopKVxyXG4vLyBodHRwczovL3N1cGFiYXNlLmNvbS9kb2NzL3JlZmVyZW5jZS9qYXZhc2NyaXB0L2luaXRpYWxpemluZyN3aXRoLWFkZGl0aW9uYWwtcGFyYW1ldGVyc1xyXG5cclxuLy8gY29uc3Qgc3VwYWJhc2VPcHRpb25zID0ge1xyXG4vLyAgIGZldGNoLCAvLyBzZWUgXHUyNkEwXHVGRTBGIGNsb3VkZmxhcmVcclxuLy8gICBzY2hlbWE6IFwicHVibGljXCIsXHJcbi8vICAgcGVyc2lzdFNlc3Npb246IHRydWUsXHJcbi8vICAgYXV0b1JlZnJlc2hUb2tlbjogdHJ1ZSxcclxuLy8gICBkZXRlY3RTZXNzaW9uSW5Vcmw6IHRydWUsXHJcbi8vICAgaGVhZGVyczogeyBcIngtYXBwbGljYXRpb24tbmFtZVwiOiBcIntteS1zaXRlLW5hbWV9XCIgfVxyXG4vLyB9O1xyXG5cclxuLy8gXHUyNkEwXHVGRTBGIGNsb3VkZmxhcmUgbmVlZHMgeW91IGRlZmluZSBmZXRjaCBvcHRpb24gOiBodHRwczovL2dpdGh1Yi5jb20vc3VwYWJhc2Uvc3VwYWJhc2UtanMjY3VzdG9tLWZldGNoLWltcGxlbWVudGF0aW9uXHJcbi8vIFVzZSBSZW1peCBmZXRjaCBwb2x5ZmlsbCBmb3Igbm9kZSAoU2VlIGh0dHBzOi8vcmVtaXgucnVuL2RvY3MvZW4vdjEvb3RoZXItYXBpL25vZGUpXHJcbmV4cG9ydCBjb25zdCBzdXBhYmFzZUFkbWluID0gY3JlYXRlQ2xpZW50KHByb2Nlc3MuZW52LlNVUEFCQVNFX1VSTCwgcHJvY2Vzcy5lbnYuU1VQQUJBU0VfU0VSVklDRV9LRVksIHtcclxuICBmZXRjaDogKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLFxyXG59KTtcclxuXHJcbmV4cG9ydCB7IFNlc3Npb24gfTtcclxuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuXHJcbmxldCBkYjogUHJpc21hQ2xpZW50O1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIHZhciBfX2RiOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8vIHRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgaW4gZGV2ZWxvcG1lbnQgd2UgZG9uJ3Qgd2FudCB0byByZXN0YXJ0XHJcbi8vIHRoZSBzZXJ2ZXIgd2l0aCBldmVyeSBjaGFuZ2UsIGJ1dCB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBkb24ndFxyXG4vLyBjcmVhdGUgYSBuZXcgY29ubmVjdGlvbiB0byB0aGUgREIgd2l0aCBldmVyeSBjaGFuZ2UgZWl0aGVyLlxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gIGRiID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG4gIGRiLiRjb25uZWN0KCk7XHJcbn0gZWxzZSB7XHJcbiAgaWYgKCFnbG9iYWwuX19kYikge1xyXG4gICAgZ2xvYmFsLl9fZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbiAgICBnbG9iYWwuX19kYi4kY29ubmVjdCgpO1xyXG4gIH1cclxuICBkYiA9IGdsb2JhbC5fX2RiO1xyXG59XHJcblxyXG5leHBvcnQgeyBkYiB9O1xyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xyXG5pbXBvcnQgeyB1c2VTdWJtaXQgfSBmcm9tICdyZW1peCc7XHJcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tICd+L2F1dGguc2VydmVyJztcclxuaW1wb3J0IHsgc3VwYWJhc2VDbGllbnQgfSBmcm9tICd+L3N1cGFiYXNlLmNsaWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGF3YWl0IGF1dGhlbnRpY2F0b3IuYXV0aGVudGljYXRlKCdzYi1vYXV0aCcsIHJlcXVlc3QsIHtcclxuICAgIHN1Y2Nlc3NSZWRpcmVjdDogJy8nLFxyXG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9BdXRoKCkge1xyXG4gIGNvbnN0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhOiBhdXRoTGlzdGVuZXIgfSA9IHN1cGFiYXNlQ2xpZW50LmF1dGgub25BdXRoU3RhdGVDaGFuZ2UoKGV2ZW50LCBzZXNzaW9uKSA9PiB7XHJcbiAgICAgIGlmIChldmVudCA9PT0gJ1NJR05FRF9JTicpIHtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnc2Vzc2lvbicsIEpTT04uc3RyaW5naWZ5KHNlc3Npb24pKTtcclxuXHJcbiAgICAgICAgc3VibWl0KGZvcm1EYXRhLCB7IG1ldGhvZDogJ3Bvc3QnIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBhdXRoTGlzdGVuZXI/LnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9O1xyXG4gIH0sIFtzdWJtaXRdKTtcclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuIiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCBPdXRsZXQsIHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnO1xyXG5pbXBvcnQgeyBvQXV0aFN0cmF0ZWd5IH0gZnJvbSAnfi9hdXRoLnNlcnZlcic7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGF3YWl0IG9BdXRoU3RyYXRlZ3kuY2hlY2tTZXNzaW9uKHJlcXVlc3QsIHtcclxuICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHt9O1xyXG59O1xyXG5cclxuY29uc3QgTVcgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxPdXRsZXQgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNVztcclxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIEZvcm0sIExvYWRlckZ1bmN0aW9uLCByZWRpcmVjdCwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4JztcclxuaW1wb3J0IHsgb0F1dGhTdHJhdGVneSB9IGZyb20gJ34vYXV0aC5zZXJ2ZXInO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJ34vdXRpbHMvZGIuc2VydmVyJztcclxuaW1wb3J0IHsgV29ycnkgfSBmcm9tICd+L3V0aWxzL3R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgb0F1dGhTdHJhdGVneS5jaGVja1Nlc3Npb24ocmVxdWVzdCwge1xyXG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcclxuICB9KTtcclxuICBsZXQgd29ycnlfaWQgPSBwYXJhbXMuaWQ7XHJcbiAgbGV0IGRhdGE7XHJcbiAgaWYgKHdvcnJ5X2lkKSB7XHJcbiAgICBkYXRhID0gYXdhaXQgZGIucG9zdHMuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogK3dvcnJ5X2lkLFxyXG4gICAgICAgIGF1dGhvcklkOiB1c2VyLnVzZXI/LmlkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChkYXRhKSB7XHJcbiAgICByZXR1cm4geyBkYXRhIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiByZWRpcmVjdCgnL215LXdvcnJpZXM/cGFnZT0xJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGNvbnN0IHdvcnJ5OiBzdHJpbmcgfCB1bmRlZmluZWQgPSBmb3JtRGF0YS5nZXQoJ3dvcnJ5Jyk/LnRvU3RyaW5nKCk7XHJcbiAgbGV0IHdvcnJ5X2lkID0gcGFyYW1zLmlkO1xyXG4gIGlmICh3b3JyeSAmJiB3b3JyeV9pZCkge1xyXG4gICAgbGV0IGlzQW5vbjtcclxuICAgIGlmIChmb3JtRGF0YS5nZXQoJ2Fub255bW91c2x5JykpIHtcclxuICAgICAgaXNBbm9uID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlzQW5vbiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgZGIucG9zdHMudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogK3dvcnJ5X2lkLFxyXG4gICAgICB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcG9zdDogd29ycnksXHJcbiAgICAgICAgaXNfYW5vbjogaXNBbm9uLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiByZWRpcmVjdCgnL215LXdvcnJpZXM/cGFnZT0xJyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBXb3JyeUVkaXQoKSB7XHJcbiAgY29uc3QgeyBkYXRhIH06IHsgZGF0YTogV29ycnkgfSA9IHVzZUxvYWRlckRhdGEoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+RWRpdCB5b3VyIHdvcnJ5PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG15LTUgc3BhY2UteS0zXCIgbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzIgdGV4dGFyZWEgdGV4dGFyZWEtYm9yZGVyZWRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIHdvcnJ5XCJcclxuICAgICAgICAgIG5hbWU9XCJ3b3JyeVwiXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEucG9zdH1cclxuICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgbGFiZWxcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTIgbGFiZWwtdGV4dFwiPlBvc3QgYW5vbnltb3VzbHk8L3NwYW4+XHJcbiAgICAgICAgICA8aW5wdXQgZGVmYXVsdENoZWNrZWQ9e2RhdGEuaXNfYW5vbn0gdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3gtc21cIiBuYW1lPVwiYW5vbnltb3VzbHlcIiAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIHctWzIwMHB4XVwiPlxyXG4gICAgICAgICAgRWRpdFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JyeUVkaXQ7XHJcbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgRm9ybSwgTGluaywgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0LCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xyXG5pbXBvcnQgeyBvQXV0aFN0cmF0ZWd5IH0gZnJvbSAnfi9hdXRoLnNlcnZlcic7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnfi91dGlscy9kYi5zZXJ2ZXInO1xyXG5pbXBvcnQgeyBXb3JyeSB9IGZyb20gJ34vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBSaURlbGV0ZUJpbjZMaW5lLCBSaUVkaXRMaW5lIH0gZnJvbSAncmVhY3QtaWNvbnMvcmknO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBvQXV0aFN0cmF0ZWd5LmNoZWNrU2Vzc2lvbihyZXF1ZXN0LCB7XHJcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCBwYWdlX3MgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgncGFnZScpO1xyXG4gIGlmICghcGFnZV9zIHx8ICErcGFnZV9zKSByZXR1cm4gcmVkaXJlY3QoJy9teS13b3JyaWVzP3BhZ2U9MScpO1xyXG4gIGxldCBwYWdlID0gK3BhZ2VfcztcclxuICBsZXQgd29ycmllcywgcGFnZXMsIGFycl9wYWdlcztcclxuICBpZiAoc2Vzc2lvbikge1xyXG4gICAgY29uc3QgcG9zdHNfY291bnQgPSBhd2FpdCBkYi5wb3N0cy5jb3VudCh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgYXV0aG9ySWQ6IHNlc3Npb24udXNlcj8uaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHBhZ2VzID0gcG9zdHNfY291bnQgLyAxMDtcclxuICAgIGlmIChwYWdlcyA9PT0gMCkgcGFnZXMgPSAxO1xyXG5cclxuICAgIGxldCB6dnlzb2sgPSBwb3N0c19jb3VudCAlIDEwO1xyXG4gICAgaWYgKHp2eXNvayA+IDApIHBhZ2VzID0gTWF0aC5mbG9vcihwYWdlcykgKyAxO1xyXG5cclxuICAgIGxldCBza2lwID0gMDtcclxuICAgIGlmIChwYWdlID4gMSkgc2tpcCA9IChwYWdlIC0gMSkgKiAxMDtcclxuICAgIGlmIChwYWdlID4gcGFnZXMpIHJldHVybiByZWRpcmVjdCgnL215LXdvcnJpZXM/cGFnZT0xJyk7XHJcbiAgICBhcnJfcGFnZXMgPSBBcnJheShwYWdlcylcclxuICAgICAgLmZpbGwoMClcclxuICAgICAgLm1hcCgoXywgaSkgPT4gaSsrKTtcclxuICAgIHdvcnJpZXMgPSBhd2FpdCBkYi5wb3N0cy5maW5kTWFueSh7XHJcbiAgICAgIG9yZGVyQnk6IHtcclxuICAgICAgICBjcmVhdGVkX2F0OiAnZGVzYycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNraXA6IHNraXAsXHJcbiAgICAgIHRha2U6IDEwLFxyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGF1dGhvcklkOiBzZXNzaW9uLnVzZXI/LmlkLFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgdXNlcl9uYW1lOiB0cnVlLFxyXG4gICAgICAgICAgICBhdmF0YXJfdXJsOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9jb3VudDoge1xyXG4gICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgIGNvbW1lbnRzOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiB7IHdvcnJpZXMsIHBhZ2UsIGFycl9wYWdlcyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuXHJcbiAgY29uc3Qgd29ycnlJZCA9IGZvcm1EYXRhLmdldCgnd29ycnlJZCcpO1xyXG4gIGlmICh3b3JyeUlkKSB7XHJcbiAgICBpZiAoZm9ybURhdGEuZ2V0KCdfYWN0aW9uJykgPT09ICdkZWxldGUnKSB7XHJcbiAgICAgIGF3YWl0IGRiLnBvc3RzLmRlbGV0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgIGlkOiArd29ycnlJZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChmb3JtRGF0YS5nZXQoJ19hY3Rpb24nKSA9PT0gJ2VkaXQnKSB7XHJcbiAgICAgIHJldHVybiByZWRpcmVjdChgL215LXdvcnJpZXMvJHt3b3JyeUlkfS9lZGl0YCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0RGF0ZShkYXRlOiBEYXRlKSB7XHJcbiAgY29uc3QgY3JlYXRlZCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gIGNvbnN0IGRheSA9IGNyZWF0ZWQuZ2V0RGF0ZSgpO1xyXG4gIGNvbnN0IG1vbnRoID0gY3JlYXRlZC5nZXRNb250aCgpO1xyXG4gIGNvbnN0IHllYXIgPSBjcmVhdGVkLmdldEZ1bGxZZWFyKCk7XHJcbiAgcmV0dXJuIG1vbnRoICsgMSArICcvJyArIGRheSArICcvJyArIHllYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15V29ycmllcygpIHtcclxuICBjb25zdCB7IHdvcnJpZXMsIHBhZ2UsIGFycl9wYWdlcyB9OiB7IHdvcnJpZXM6IFdvcnJ5W107IHBhZ2U6IG51bWJlcjsgYXJyX3BhZ2VzOiBudW1iZXJbXSB9ID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPllvdXIgd29ycmllczwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSB3LVs5NSVdIHNtOnctWzg1JV0gbWQ6dy1bNzUlXSBib3JkZXIgbXgtYXV0byBib3JkZXItZ3JheS01MDBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgIHt3b3JyaWVzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgIHdvcnJpZXMubWFwKChpdGVtOiBXb3JyeSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJmbGV4IGhvdmVyOmJnLWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz17YC8ke2l0ZW0uaWR9YH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBmbGV4LWdyb3cgcC0zIGN1cnNvci1wb2ludGVyIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtY2xhbXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTMwMCBmaXJzdC1saW5lOmZvbnQtc2VtaWJvbGQgZmlyc3QtbGluZTp0ZXh0LWJhc2UgZmlyc3QtbGluZTp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTIgdGV4dC14cyB0ZXh0LWdyYXktNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uaXNfYW5vbiA/IDxwPkFub255bTwvcD4gOiA8cD57aXRlbS5hdXRob3I/LnVzZXJfbmFtZX08L3A+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXIgYm9yZGVyLWdyYXktNTAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5Db21tZW50czoge2l0ZW0uX2NvdW50LmNvbW1lbnRzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1yIGJvcmRlci1ncmF5LTUwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e2dldERhdGUoaXRlbS5jcmVhdGVkX2F0KX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXIgcHgtMiBweS00IHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3b3JyeUlkXCIgdmFsdWU9e2l0ZW0uaWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJfYWN0aW9uXCIgdmFsdWU9XCJkZWxldGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmlEZWxldGVCaW42TGluZSBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtcmVkLTUwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBlYXNlLW91dCB0cmFuc2Zvcm0gY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2NhbGUtMTI1XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJfYWN0aW9uXCIgdmFsdWU9XCJlZGl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJpRWRpdExpbmUgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWJsdWUtNTAwIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2Utb3V0IHRyYW5zZm9ybSBjdXJzb3ItcG9pbnRlciBob3ZlcjpzY2FsZS0xMjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHktNSB0ZXh0LXNtIHRleHQtZ3JheS00MDBcIj5Ob3RoaW5nIGZvdW5kIHlldDwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbWItNSBidG4tZ3JvdXBcIj5cclxuICAgICAgICB7YXJyX3BhZ2VzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAga2V5PXtpdGVtfVxyXG4gICAgICAgICAgICB0bz17YC9teS13b3JyaWVzP3BhZ2U9JHtpdGVtICsgMX1gfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLXhzICR7aXRlbSArIDEgPT09IHBhZ2UgJiYgJ2J0bi1hY3RpdmUnfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpdGVtICsgMX1cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIEZvcm0sIExvYWRlckZ1bmN0aW9uLCByZWRpcmVjdCwgU2Vzc2lvbiwgdXNlTG9hZGVyRGF0YSwgdXNlVHJhbnNpdGlvbiB9IGZyb20gJ3JlbWl4JztcclxuaW1wb3J0IHsgb0F1dGhTdHJhdGVneSB9IGZyb20gJ34vYXV0aC5zZXJ2ZXInO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJ34vdXRpbHMvZGIuc2VydmVyJztcclxuaW1wb3J0IHsgV29ycnkgfSBmcm9tICd+L3V0aWxzL3R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgb0F1dGhTdHJhdGVneS5jaGVja1Nlc3Npb24ocmVxdWVzdCk7XHJcbiAgbGV0IHdvcnJ5X2lkID0gcGFyYW1zLndvcnJ5X2lkO1xyXG4gIGxldCB1c2VyX2lkO1xyXG4gIGlmIChzZXNzaW9uKSB7XHJcbiAgICB1c2VyX2lkID0gc2Vzc2lvbi51c2VyPy5pZDtcclxuICB9XHJcblxyXG4gIGxldCB3b3JyeTtcclxuICBpZiAod29ycnlfaWQpIHtcclxuICAgIHdvcnJ5ID0gYXdhaXQgZGIucG9zdHMuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaWQ6ICt3b3JyeV9pZCxcclxuICAgICAgfSxcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIGF1dGhvcjoge1xyXG4gICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgIHVzZXJfbmFtZTogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21tZW50czoge1xyXG4gICAgICAgICAgb3JkZXJCeToge1xyXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiAnZGVzYycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICBhdXRob3I6IHtcclxuICAgICAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJfbmFtZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF2YXRhcl91cmw6IHRydWUsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAoIXdvcnJ5KSB7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoJy8nKTtcclxuICB9XHJcbiAgcmV0dXJuIHsgd29ycnksIHVzZXJfaWQgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgY29uc3Qgd29ycnlJZCA9IGZvcm1EYXRhLmdldCgnd29ycnlJZCcpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IGZvcm1EYXRhLmdldCgndXNlcklkJyk7XHJcbiAgY29uc3QgY29tbWVudCA9IGZvcm1EYXRhLmdldCgnY29tbWVudCcpO1xyXG4gIGlmICghY29tbWVudCB8fCAhd29ycnlJZCB8fCAhdXNlcklkKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9IGVsc2Uge1xyXG4gICAgYXdhaXQgZGIuY29tbWVudHMuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNvbW1lbnQ6IGNvbW1lbnQudG9TdHJpbmcoKSxcclxuICAgICAgICBhdXRob3JJZDogdXNlcklkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgcG9zdElkOiArd29ycnlJZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldERhdGUoZGF0ZTogRGF0ZSkge1xyXG4gIGNvbnN0IGNyZWF0ZWQgPSBuZXcgRGF0ZShkYXRlKTtcclxuICBjb25zdCBkYXkgPSBjcmVhdGVkLmdldERhdGUoKTtcclxuICBjb25zdCBtb250aCA9IGNyZWF0ZWQuZ2V0TW9udGgoKTtcclxuICBjb25zdCB5ZWFyID0gY3JlYXRlZC5nZXRGdWxsWWVhcigpO1xyXG4gIHJldHVybiBtb250aCArIDEgKyAnLycgKyBkYXkgKyAnLycgKyB5ZWFyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBXb3JyeUlkKCkge1xyXG4gIGNvbnN0IHsgd29ycnksIHVzZXJfaWQgfTogeyB3b3JyeTogV29ycnk7IHVzZXJfaWQ6IHN0cmluZyB9ID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XHJcbiAgbGV0IGlzQWRkaW5nID0gdHJhbnNpdGlvbi5zdGF0ZSA9PT0gJ3N1Ym1pdHRpbmcnICYmIHRydWU7XHJcbiAgY29uc3QgZm9ybVJlZiA9IHVzZVJlZjxIVE1MRm9ybUVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc0FkZGluZykge1xyXG4gICAgICBmb3JtUmVmLmN1cnJlbnQ/LnJlc2V0KCk7XHJcbiAgICB9XHJcbiAgfSwgW2lzQWRkaW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTEwIHctWzk1JV0gc206dy1bODUlXSBtZDp3LVs3NSVdIG14LWF1dG8gcC0zIGJvcmRlci1ncmF5LTUwMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTFcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj57d29ycnkucG9zdH08L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yIHRleHQteHMgdGV4dC1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgICB7d29ycnkuaXNfYW5vbiA/IDxwPkFub255bTwvcD4gOiA8cD57d29ycnkuYXV0aG9yPy51c2VyX25hbWV9PC9wPn1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItciBib3JkZXItZ3JheS01MDBcIiAvPlxyXG4gICAgICAgICAgICA8cD57Z2V0RGF0ZSh3b3JyeS5jcmVhdGVkX2F0KX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgYm9yZGVyLWIgYm9yZGVyLWdyYXktNTAwXCIgLz5cclxuICAgICAgICB7dXNlcl9pZCAmJiAoXHJcbiAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC01IHNwYWNlLXktMlwiIHJlZj17Zm9ybVJlZn0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndvcnJ5SWRcIiB2YWx1ZT17d29ycnkuaWR9IC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInVzZXJJZFwiIHZhbHVlPXt1c2VyX2lkfSAvPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0YXJlYSB0ZXh0YXJlYS1ib3JkZXJlZCB3LWZ1bGwgc206dy1bNzUlXSBtZDp3LVs1MCVdXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbW1lbnRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjb21tZW50XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17aXNBZGRpbmd9IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIHctWzIwMHB4XVwiPlxyXG4gICAgICAgICAgICAgIHtpc0FkZGluZyA/ICdTYXZpbmcuLi4nIDogJ0NvbW1lbnQnfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBteS01IHNwYWNlLXktNFwiPlxyXG4gICAgICAgICAge3dvcnJ5LmNvbW1lbnRzPy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiByb3VuZGVkLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uYXV0aG9yPy5hdmF0YXJfdXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPntpdGVtLmNvbW1lbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMiB0ZXh0LXhzIHRleHQtZ3JheS00MDBcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+e2l0ZW0uYXV0aG9yPy51c2VyX25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1yIGJvcmRlci1ncmF5LTUwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPntnZXREYXRlKGl0ZW0uY3JlYXRlZF9hdCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ycnlJZDtcclxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBGb3JtLCBMb2FkZXJGdW5jdGlvbiwgT3V0bGV0IH0gZnJvbSAncmVtaXgnO1xyXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xyXG5pbXBvcnQgeyBvQXV0aFN0cmF0ZWd5IH0gZnJvbSAnfi9hdXRoLnNlcnZlcic7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnfi91dGlscy9kYi5zZXJ2ZXInO1xyXG5pbXBvcnQgeyBQcm9maWxlLCBXb3JyeSB9IGZyb20gJ34vdXRpbHMvdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgb0F1dGhTdHJhdGVneS5jaGVja1Nlc3Npb24ocmVxdWVzdCwge1xyXG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcclxuICB9KTtcclxuICBsZXQgdXNlcjtcclxuICBpZiAoc2Vzc2lvbikge1xyXG4gICAgdXNlciA9IGF3YWl0IGRiLnByb2ZpbGVzLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBzZXNzaW9uLnVzZXI/LmlkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiB7IHVzZXIgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IG9BdXRoU3RyYXRlZ3kuY2hlY2tTZXNzaW9uKHJlcXVlc3QsIHtcclxuICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicsXHJcbiAgfSk7XHJcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgbGV0IHVzZXJfbmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gZm9ybURhdGEuZ2V0KCd1c2VyX25hbWUnKT8udG9TdHJpbmcoKTtcclxuICBsZXQgZW1haWw6IHN0cmluZyB8IHVuZGVmaW5lZCA9IGZvcm1EYXRhLmdldCgnZW1haWwnKT8udG9TdHJpbmcoKTtcclxuICBpZiAoIXVzZXJfbmFtZSB8fCAhZW1haWwpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICBjb25zdCB1cGRhdGVVc2VyID0gYXdhaXQgZGIucHJvZmlsZXMudXBkYXRlKHtcclxuICAgIHdoZXJlOiB7XHJcbiAgICAgIGlkOiBzZXNzaW9uLnVzZXI/LmlkLFxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgdXNlcl9uYW1lLFxyXG4gICAgICBlbWFpbCxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xyXG4gIGNvbnN0IHsgdXNlciB9OiB7IHVzZXI6IFByb2ZpbGUgfSA9IHVzZUxvYWRlckRhdGEoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG10LVsxMHZoXVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteC00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS01MDAgcm91bmRlZC1mdWxsIHctNDRcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJfdXJsfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGRcIj57dXNlci51c2VyX25hbWV9PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+e3VzZXIuZW1haWx9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXktWzV2aF0gc3BhY2UteS0zXCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyIHctWzUwdmhdIGlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LVsxNTBweF1cIj5Vc2VybmFtZTwvc3Bhbj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VyX25hbWVcIlxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3VzZXIudXNlcl9uYW1lfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGlucHV0IGlucHV0LWJvcmRlcmVkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgdy1bNTB2aF0gaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctWzE1MHB4XVwiPkVtYWlsPC9zcGFuPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3VzZXIuZW1haWx9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBpbnB1dCBpbnB1dC1ib3JkZXJlZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biB3LVsyMDBweF1cIj5cclxuICAgICAgICAgIFNhdmVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8T3V0bGV0IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBMaW5rLCBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QsIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCc7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ34vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICd+L3V0aWxzL2RiLnNlcnZlcic7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCBwYWdlID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3BhZ2UnKTtcclxuICBpZiAoIXBhZ2UgfHwgIStwYWdlKSByZXR1cm4gcmVkaXJlY3QoJy8/cGFnZT0xJyk7XHJcbiAgbGV0IHBhZ2VzO1xyXG4gIGNvbnN0IHBvc3RzX2NvdW50ID0gYXdhaXQgZGIucG9zdHMuY291bnQoKTtcclxuICBwYWdlcyA9IHBvc3RzX2NvdW50IC8gMTA7XHJcbiAgaWYgKHBhZ2VzID09PSAwKSBwYWdlcyA9IDE7XHJcblxyXG4gIGxldCB6dnlzb2sgPSBwb3N0c19jb3VudCAlIDEwO1xyXG4gIGlmICh6dnlzb2sgPiAwKSBwYWdlcyA9IE1hdGguZmxvb3IocGFnZXMpICsgMTtcclxuXHJcbiAgbGV0IHNraXAgPSAwO1xyXG4gIGlmICgrcGFnZSA+IDEpIHNraXAgPSAoK3BhZ2UgLSAxKSAqIDEwO1xyXG4gIGlmICgrcGFnZSA+IHBhZ2VzKSByZXR1cm4gcmVkaXJlY3QoJy8/cGFnZT0xJyk7XHJcbiAgbGV0IGFycl9wYWdlcyA9IEFycmF5KHBhZ2VzKVxyXG4gICAgLmZpbGwoMClcclxuICAgIC5tYXAoKF8sIGkpID0+IGkrKyk7XHJcbiAgY29uc3QgYWxsX3Bvc3RzID0gYXdhaXQgZGIucG9zdHMuZmluZE1hbnkoe1xyXG4gICAgb3JkZXJCeToge1xyXG4gICAgICBjcmVhdGVkX2F0OiAnZGVzYycsXHJcbiAgICB9LFxyXG4gICAgc2tpcDogc2tpcCxcclxuICAgIHRha2U6IDEwLFxyXG5cclxuICAgIGluY2x1ZGU6IHtcclxuICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICB1c2VyX25hbWU6IHRydWUsXHJcbiAgICAgICAgICBhdmF0YXJfdXJsOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIF9jb3VudDoge1xyXG4gICAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgICAgY29tbWVudHM6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHsgYWxsX3Bvc3RzLCBhcnJfcGFnZXMsIHBhZ2UgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldERhdGUoZGF0ZTogRGF0ZSkge1xyXG4gIGNvbnN0IGNyZWF0ZWQgPSBuZXcgRGF0ZShkYXRlKTtcclxuICBjb25zdCBkYXkgPSBjcmVhdGVkLmdldERhdGUoKTtcclxuICBjb25zdCBtb250aCA9IGNyZWF0ZWQuZ2V0TW9udGgoKTtcclxuICBjb25zdCB5ZWFyID0gY3JlYXRlZC5nZXRGdWxsWWVhcigpO1xyXG4gIHJldHVybiBtb250aCArIDEgKyAnLycgKyBkYXkgKyAnLycgKyB5ZWFyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICBjb25zdCB7IGFsbF9wb3N0cywgYXJyX3BhZ2VzLCBwYWdlIH0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bFwiPldlbGNvbWUgdG8gV29ycnlJZnk8L2gxPlxyXG4gICAgICAgIDxwPkEgcGxhY2UgdG8gbGV0IHlvdXIgd29ycmllcyBnby48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIHctWzk1JV0gc206dy1bODUlXSBtZDp3LVs3NSVdIGJvcmRlciBteC1hdXRvIGJvcmRlci1ncmF5LTUwMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBcIj5cclxuICAgICAgICAgIHthbGxfcG9zdHMubWFwKChpdGVtOiBhbnkpID0+IChcclxuICAgICAgICAgICAgPExpbmsgdG89e2AvJHtpdGVtLmlkfWB9IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTMgY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtY2xhbXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktMzAwIGZpcnN0LWxpbmU6Zm9udC1zZW1pYm9sZCBmaXJzdC1saW5lOnRleHQtYmFzZSBmaXJzdC1saW5lOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0ucG9zdH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yIHRleHQteHMgdGV4dC1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0uaXNfYW5vbiA/IDxwPkFub255bTwvcD4gOiA8cD57aXRlbS5hdXRob3IudXNlcl9uYW1lfTwvcD59XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1yIGJvcmRlci1ncmF5LTUwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5Db21tZW50czoge2l0ZW0uX2NvdW50LmNvbW1lbnRzfTwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXIgYm9yZGVyLWdyYXktNTAwXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwPntnZXREYXRlKGl0ZW0uY3JlYXRlZF9hdCl9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxQYWdpbmF0aW9uIGFycl9wYWdlcz17YXJyX3BhZ2VzfSBwYWdlPXtwYWdlfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4JztcclxuXHJcbmZ1bmN0aW9uIFBhZ2luYXRpb24oeyBwYWdlLCBhcnJfcGFnZXMgfTogeyBwYWdlOiBudW1iZXI7IGFycl9wYWdlczogbnVtYmVyW10gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbWItMTAgYnRuLWdyb3VwXCI+XHJcbiAgICAgIHthcnJfcGFnZXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgPExpbmsga2V5PXtpdGVtfSB0bz17YC8/cGFnZT0ke2l0ZW0gKyAxfWB9IGNsYXNzTmFtZT17YGJ0biBidG4tc20gJHtpdGVtICsgMSA9PT0gK3BhZ2UgJiYgJ2J0bi1hY3RpdmUnfWB9PlxyXG4gICAgICAgICAge2l0ZW0gKyAxfVxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uO1xyXG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gJ3JlbWl4JztcclxuaW1wb3J0IHsganNvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4JztcclxuaW1wb3J0IHsgYXV0aGVudGljYXRvciwgb0F1dGhTdHJhdGVneSwgc2Vzc2lvblN0b3JhZ2UgfSBmcm9tICd+L2F1dGguc2VydmVyJztcclxuaW1wb3J0IHsgc2lnbkluV2l0aEdpdGh1Yiwgc2lnbkluV2l0aEdvb2dsZSB9IGZyb20gJ34vc3VwYWJhc2UuY2xpZW50JztcclxuXHJcbnR5cGUgTG9hZGVyRGF0YSA9IHtcclxuICBlcnJvcjogeyBtZXNzYWdlOiBzdHJpbmcgfSB8IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGF3YWl0IG9BdXRoU3RyYXRlZ3kuY2hlY2tTZXNzaW9uKHJlcXVlc3QsIHtcclxuICAgIHN1Y2Nlc3NSZWRpcmVjdDogJy8nLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc2Vzc2lvblN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSk7XHJcblxyXG4gIGNvbnN0IGVycm9yID0gc2Vzc2lvbi5nZXQoYXV0aGVudGljYXRvci5zZXNzaW9uRXJyb3JLZXkpIGFzIExvYWRlckRhdGFbJ2Vycm9yJ107XHJcblxyXG4gIHJldHVybiBqc29uPExvYWRlckRhdGE+KHsgZXJyb3IgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JlZW4oKSB7XHJcbiAgY29uc3QgeyBlcnJvciB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2Vycm9yICYmIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+fVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktNSB3LWZ1bGwgbXQtWzI1dmhdXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gbXgtYXV0byB3LVsyNTBweF1cIiBvbkNsaWNrPXsoKSA9PiBzaWduSW5XaXRoR2l0aHViKCl9PlxyXG4gICAgICAgICAgU2lnbiBpbiB3aXRoIEdpdGh1YlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIG14LWF1dG8gdy1bMjUwcHhdXCIgb25DbGljaz17KCkgPT4gc2lnbkluV2l0aEdvb2dsZSgpfT5cclxuICAgICAgICAgIFNpZ24gaW4gd2l0aCBHb29nbGVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgRm9ybSwgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0LCB1c2VUcmFuc2l0aW9uIH0gZnJvbSAncmVtaXgnO1xyXG5pbXBvcnQgeyBvQXV0aFN0cmF0ZWd5IH0gZnJvbSAnfi9hdXRoLnNlcnZlcic7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnfi91dGlscy9kYi5zZXJ2ZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBhd2FpdCBvQXV0aFN0cmF0ZWd5LmNoZWNrU2Vzc2lvbihyZXF1ZXN0LCB7XHJcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IG9BdXRoU3RyYXRlZ3kuY2hlY2tTZXNzaW9uKHJlcXVlc3QsIHtcclxuICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicsXHJcbiAgfSk7XHJcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgY29uc3Qgd29ycnk6IHN0cmluZyB8IHVuZGVmaW5lZCA9IGZvcm1EYXRhLmdldCgnd29ycnknKT8udG9TdHJpbmcoKTtcclxuICBpZiAod29ycnkgJiYgc2Vzc2lvbi51c2VyKSB7XHJcbiAgICBsZXQgaXNBbm9uO1xyXG4gICAgaWYgKGZvcm1EYXRhLmdldCgnYW5vbnltb3VzbHknKSkge1xyXG4gICAgICBpc0Fub24gPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXNBbm9uID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBhd2FpdCBkYi5wb3N0cy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcG9zdDogd29ycnksXHJcbiAgICAgICAgaXNfYW5vbjogaXNBbm9uLFxyXG4gICAgICAgIGF1dGhvcklkOiBzZXNzaW9uLnVzZXIuaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIHJlZGlyZWN0KCcvJyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGQoKSB7XHJcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcclxuICBsZXQgaXNBZGRpbmcgPSB0cmFuc2l0aW9uLnN0YXRlID09PSAnc3VibWl0dGluZycgJiYgdHJ1ZTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5BZGQgeW91ciB3b3JyeTwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPmFuZCBsZXQgaXQgZ288L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteS01IHNwYWNlLXktM1wiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwidy0xLzIgdGV4dGFyZWEgdGV4dGFyZWEtYm9yZGVyZWRcIiBwbGFjZWhvbGRlcj1cIllvdXIgd29ycnlcIiBuYW1lPVwid29ycnlcIj48L3RleHRhcmVhPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBsYWJlbFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMiBsYWJlbC10ZXh0XCI+UG9zdCBhbm9ueW1vdXNseTwvc3Bhbj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveC1zbVwiIG5hbWU9XCJhbm9ueW1vdXNseVwiIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtpc0FkZGluZ30gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biB3LVsyMDBweF1cIj5cclxuICAgICAgICAgIHtpc0FkZGluZyA/ICdTYXZpbmcuLi4nIDogJ1Bvc3QnfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOicyZWRiMDY5MycsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtUURZVTZMVjUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNZUFlEMlNULmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1MRVhSMlFSNi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRUdLUE1OSDIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1UUlhFWjdKUS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6dHJ1ZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX0sJ3JvdXRlcy8kd29ycnlfaWQnOnsnaWQnOidyb3V0ZXMvJHdvcnJ5X2lkJywncGFyZW50SWQnOidyb290JywncGF0aCc6Jzp3b3JyeV9pZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy8kd29ycnlfaWQtWVk1NUI3QTIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVKT0xYMjZCLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRkJzp7J2lkJzoncm91dGVzL2FkZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZGQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRkLVVBQ1hZVE1WLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay01Sk9MWDI2Qi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LTVDQk01TDRBLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay01Sk9MWDI2Qi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dpbic6eydpZCc6J3JvdXRlcy9sb2dpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dpbi01V0VMQ01FTC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWk5VVU9TMkUuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbXktd29ycmllcyc6eydpZCc6J3JvdXRlcy9teS13b3JyaWVzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J215LXdvcnJpZXMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbXktd29ycmllcy1ZWVFXQkhQSi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbXktd29ycmllcy8kaWQuZWRpdCc6eydpZCc6J3JvdXRlcy9teS13b3JyaWVzLyRpZC5lZGl0JywncGFyZW50SWQnOidyb3V0ZXMvbXktd29ycmllcycsJ3BhdGgnOic6aWQvZWRpdCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9teS13b3JyaWVzLyRpZC5lZGl0LVBDNzROUjdELmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay01Sk9MWDI2Qi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVRSWEVaN0pRLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbXktd29ycmllcy9pbmRleCc6eydpZCc6J3JvdXRlcy9teS13b3JyaWVzL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvbXktd29ycmllcycsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9teS13b3JyaWVzL2luZGV4LVdCRUNBTjRZLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FR0tQTU5IMi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVKT0xYMjZCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVFJYRVo3SlEuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9vYXV0aC5jYWxsYmFjayc6eydpZCc6J3JvdXRlcy9vYXV0aC5jYWxsYmFjaycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidvYXV0aC9jYWxsYmFjaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9vYXV0aC5jYWxsYmFjay1PRlBTNzI1Ui5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWk5VVU9TMkUuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcHJvZmlsZSc6eydpZCc6J3JvdXRlcy9wcm9maWxlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Byb2ZpbGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcHJvZmlsZS1XWEI1V1NIVC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNUpPTFgyNkIuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtMkVEQjA2OTMuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9B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

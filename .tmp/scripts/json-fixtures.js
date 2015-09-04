window.FIXTURES = {
    "swagger/v2-oauth.json": {
        "swagger": "2.0",
        "host": "topcoder.auth0.com",
        "basePath": "",
        "schemes": [
                "https"
        ],
        "produces": [
                "application/json"
        ],
        "paths": {
                "/oauth/ro": {
                        "post": {
                                "responses": {
                                        "200": {
                                                "schema": {
                                                        "type": "object",
                                                        "items": {
                                                                "$ref": "#/definitions/Token"
                                                        }
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                },
                "/oauth/tokeninfo": {
                        "post": {
                                "responses": {
                                        "200": {
                                                "schema": {
                                                        "type": "object",
                                                        "items": {
                                                                "$ref": "#/definitions/TokenInfo"
                                                        }
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                },
                "/delegation": {
                        "post": {
                                "responses": {
                                        "200": {
                                                "schema": {
                                                        "type": "object",
                                                        "items": {
                                                                "$ref": "#/definitions/Delegation"
                                                        }
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                }
        },
        "definitions": {
                "Delegation": {
                        "properties": {
                                "expires_in": {
                                        "type": "number",
                                        "sample": 360000000
                                },
                                "id_token": {
                                        "type": "string",
                                        "sample": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI0ZWM0YThkMTJjOWM2MzQ2YzhiODRlMTliODYzNGQ1NSIsIm5hbWUiOiJKb2huQ3VzdG9tZXIiLCJuaWNrbmFtZSI6IkpvaG5DdXN0b21lciIsImdyb3VwcyI6W10sImRuIjoidWlkPTQwMTM2MDIxLG91PW1lbWJlcnMsZGM9dG9wY29kZXIsZGM9Y29tIiwiY2xpZW50SUQiOiJKRkRvN0hNa2YwcTJDa1ZGSG9qeTN6SFdhZnppcHJoVCIsInVwZGF0ZWRfYXQiOiIyMDE1LTA4LTA1VDIzOjI1OjI4LjI1NFoiLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvMjY3ZGYxODAxNGQ4ODRlYWZhYTU1YjY4OTU1OTBhMjk_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZqby5wbmciLCJ1c2VyX2lkIjoiYWR8TERBUHw0MDEzNjAyMSIsImlkZW50aXRpZXMiOlt7InVzZXJfaWQiOiJMREFQfDQwMTM2MDIxIiwicHJvdmlkZXIiOiJhZCIsImNvbm5lY3Rpb24iOiJMREFQIiwiaXNTb2NpYWwiOmZhbHNlfV0sImNyZWF0ZWRfYXQiOiIyMDE1LTA2LTMwVDE2OjE2OjIxLjQ5NloiLCJnbG9iYWxfY2xpZW50X2lkIjoiQWtLMVFiWkhVd0VDMjhTaVNNa1FIOGVoSkpScDNpNDciLCJpc3MiOiJodHRwczovL3RvcGNvZGVyLWRldi5hdXRoMC5jb20vIiwic3ViIjoiYWR8TERBUHw0MDEzNjAyMSIsImF1ZCI6IkpGRG83SE1rZjBxMkNrVkZIb2p5M3pIV2FmemlwcmhUIiwiZXhwIjoxNzk4ODE3MTI4LCJpYXQiOjE0Mzg4MTcxMjh9.yS7DBBTk9OFCtNIjsBz0yo9fljUbngtuTOsYeGfnjhs"
                                },
                                "access_token": {
                                        "type": "string",
                                        "sample": "XsNLiJrYFCOKArmj"
                                },
                                "token_type": {
                                        "type": "string",
                                        "sample": "bearer"
                                }
                        }
                },
                "Token": {
                        "properties": {
                                "refresh_token": {
                                        "type": "string",
                                        "sample": "Yxa0mjnwNg0zC9AdWrcuW0arr4bKmar5CBI0OKHk0Tgcj"
                                },
                                "id_token": {
                                        "type": "string",
                                        "sample": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI0ZWM0YThkMTJjOWM2MzQ2YzhiODRlMTliODYzNGQ1NSIsIm5hbWUiOiJKb2huQ3VzdG9tZXIiLCJuaWNrbmFtZSI6IkpvaG5DdXN0b21lciIsImdyb3VwcyI6W10sImRuIjoidWlkPTQwMTM2MDIxLG91PW1lbWJlcnMsZGM9dG9wY29kZXIsZGM9Y29tIiwiY2xpZW50SUQiOiJKRkRvN0hNa2YwcTJDa1ZGSG9qeTN6SFdhZnppcHJoVCIsInVwZGF0ZWRfYXQiOiIyMDE1LTA4LTA1VDIzOjI1OjI4LjI1NFoiLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvMjY3ZGYxODAxNGQ4ODRlYWZhYTU1YjY4OTU1OTBhMjk_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZqby5wbmciLCJ1c2VyX2lkIjoiYWR8TERBUHw0MDEzNjAyMSIsImlkZW50aXRpZXMiOlt7InVzZXJfaWQiOiJMREFQfDQwMTM2MDIxIiwicHJvdmlkZXIiOiJhZCIsImNvbm5lY3Rpb24iOiJMREFQIiwiaXNTb2NpYWwiOmZhbHNlfV0sImNyZWF0ZWRfYXQiOiIyMDE1LTA2LTMwVDE2OjE2OjIxLjQ5NloiLCJnbG9iYWxfY2xpZW50X2lkIjoiQWtLMVFiWkhVd0VDMjhTaVNNa1FIOGVoSkpScDNpNDciLCJpc3MiOiJodHRwczovL3RvcGNvZGVyLWRldi5hdXRoMC5jb20vIiwic3ViIjoiYWR8TERBUHw0MDEzNjAyMSIsImF1ZCI6IkpGRG83SE1rZjBxMkNrVkZIb2p5M3pIV2FmemlwcmhUIiwiZXhwIjoxNzk4ODE3MTI4LCJpYXQiOjE0Mzg4MTcxMjh9.yS7DBBTk9OFCtNIjsBz0yo9fljUbngtuTOsYeGfnjhs"
                                },
                                "access_token": {
                                        "type": "string",
                                        "sample": "XsNLiJrYFCOKArmj"
                                },
                                "token_type": {
                                        "type": "string",
                                        "sample": "bearer"
                                }
                        }
                },
                "TokenInfo": {
                        "properties": {
                                "name": {
                                        "type": "string",
                                        "sample": "Boogerman"
                                },
                                "nickname": {
                                        "type": "string",
                                        "sample": "nickname"
                                },
                                "groups": {
                                        "type": "array",
                                        "sample": []
                                },
                                "dn": {
                                        "type": "string",
                                        "sample": "uid=40136021,ou=members,dc=topcoder,dc=com"
                                },
                                "clientID": {
                                        "type": "string",
                                        "sample": "JFDo7HMkf0q2CkVFHojy3zHWafziprhT"
                                },
                                "updated_at": {
                                        "type": "string",
                                        "sample": "2015-08-05T23:29:05.865Z"
                                },
                                "picture": {
                                        "type": "string",
                                        "sample": "https://s.gravatar.com/avatar/267df18014d884eafaa55b6895590a29?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fjo.png"
                                },
                                "user_id": {
                                        "type": "string",
                                        "sample": "ad|LDAP|40136021"
                                },
                                "created_at": {
                                        "type": "string",
                                        "sample": "2015-06-30T16:16:21.496Z"
                                },
                                "global_client_id": {
                                        "type": "string",
                                        "sample": "AkK1QbZHUwEC28SiSMkQH8ehJJRp3i47"
                                },
                                "identities": {
                                        "type": "array",
                                        "sample": []
                                }
                        }
                }
        }
},
    "swagger/v2.json": {
        "swagger": "2.0",
        "info": {
                "description": "Move your app forward with the Uber API",
                "version": "1.0.0",
                "title": "Uber API"
        },
        "host": "api.topcoder.com",
        "basePath": "/v2",
        "schemes": [
                "https"
        ],
        "produces": [
                "application/json"
        ],
        "paths": {
                "/users/{handle}": {
                        "get": {
                                "responses": {
                                        "200": {
                                                "schema": {
                                                        "type": "object",
                                                        "items": {
                                                                "$ref": "#/definitions/User"
                                                        }
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                }
        },
        "definitions": {
                "User": {
                        "properties": {
                                "handle": {
                                        "type": "string",
                                        "sample": "CardioBoy"
                                },
                                "country": {
                                        "type": "string",
                                        "sample": "Idonesia"
                                },
                                "memberSince": {
                                        "type": "string",
                                        "sample": "2008-10-15T05:08:00.000-0400"
                                },
                                "quote": {
                                        "type": "string",
                                        "sample": "Don't forget your roots."
                                },
                                "photoLink": {
                                        "type": "string",
                                        "sample": "/i/m/cardiboy_big.jpg"
                                }
                        }
                }
        }
},
    "swagger/v3-authorizations.json": {
        "swagger": "2.0",
        "info": {
                "description": "",
                "version": "",
                "title": ""
        },
        "host": "api.topcoder.com",
        "basePath": "/v3/authorizations",
        "schemes": [
                "https"
        ],
        "produces": [
                "application/json"
        ],
        "paths": {
                "": {
                        "post": {
                                "responses": {
                                        "200": {
                                                "schema": {
                                                        "type": "object",
                                                        "items": {
                                                                "$ref": "#/definitions/Authorization"
                                                        }
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        },
                        "delete": {
                                "responses": {
                                        "200": {
                                                "schema": {
                                                        "type": "object",
                                                        "items": {
                                                                "$ref": "#/definitions/Authorization"
                                                        }
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                },
                "/{id}": {
                        "get": {
                                "responses": {
                                        "200": {
                                                "schema": {
                                                        "type": "object",
                                                        "items": {
                                                                "$ref": "#/definitions/Authorization"
                                                        }
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                }
        },
        "definitions": {
                "Authorization": {
                        "properties": {
                                "id": {
                                        "type": "string"
                                },
                                "result": {
                                        "type": "object",
                                        "items": {
                                                "$ref": "#/definitions/AuthorizationResult"
                                        }
                                }
                        }
                },
                "AuthorizationResult": {
                        "properties": {
                                "success": {
                                        "type": "boolean",
                                        "sample": true
                                },
                                "status": {
                                        "type": "integer",
                                        "sample": 200
                                },
                                "content": {
                                        "type": "object",
                                        "items": {
                                                "$ref": "#/definitions/AuthorizationContent"
                                        }
                                }
                        }
                },
                "AuthorizationContent": {
                        "properties": {
                                "id": {
                                        "type": "string"
                                },
                                "token": {
                                        "type": "string",
                                        "sample": "yyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS50b3Bjb2Rlci1kZXYuY29tIiwiZXhwIjoxNDMzMjcxNzYwLCJ1c2VySWQiOiI0MDEzNTUxNiIsImlhdCI6MTQzMzI3MTE2MCwianRpIjoiMDZhNzVjM2EtMTQ0MC00MWE3LTk5N2YtZmFmMGVjZjFmOGM1In0.okSjl5KOmGQ6hJEoQxk4SVkFra65_Id6KUQGdAVmJNe"
                                },
                                "target": {
                                        "type": "string",
                                        "sample": "1"
                                }
                        }
                },
                "Error": {
                        "properties": {
                                "code": {
                                        "type": "integer",
                                        "format": "int32"
                                },
                                "message": {
                                        "type": "string"
                                },
                                "fields": {
                                        "type": "string"
                                }
                        }
                }
        }
},
    "swagger/v3-events.json": {
        "swagger": "2.0",
        "info": {
                "description": "",
                "version": "",
                "title": ""
        },
        "host": "api.topcoder.com",
        "basePath": "/v3/events",
        "schemes": [
                "https"
        ],
        "produces": [
                "application/json"
        ],
        "paths": {
                "": {
                        "get": {
                                "responses": {
                                        "200": {
                                                "schema": {
                                                        "type": "object",
                                                        "items": {
                                                                "$ref": "#/definitions/Event"
                                                        }
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                }
        },
        "definitions": {
                "Event": {
                        "properties": {
                                "id": {
                                        "type": "string"
                                },
                                "result": {
                                        "type": "object",
                                        "items": {
                                                "$ref": "#/definitions/EventResult"
                                        }
                                }
                        }
                },
                "EventResult": {
                        "properties": {
                                "content": {
                                        "type": "array",
                                        "items": {
                                                "$ref": "#/definitions/EventContent"
                                        }
                                }
                        }
                },
                "EventContent": {
                        "properties": {
                                "id": {
                                        "type": "string"
                                },
                                "createdBy": {
                                        "type": "string"
                                },
                                "createdAt": {
                                        "type": "string",
                                        "sample": "2015-05-05T20:53:41.467Z"
                                },
                                "sourceObjectType": {
                                        "type": "string",
                                        "enum": [
                                                "app-work-requests",
                                                "challengedata"
                                        ]
                                },
                                "sourceObjectId": {
                                        "type": "string"
                                },
                                "eventSubType": {
                                        "type": "string",
                                        "enum": [
                                                "copilot-assigned",
                                                "created",
                                                "submitted",
                                                "quote-created",
                                                "work-estimate-approved",
                                                "email-verified",
                                                "payment-accepted",
                                                "challenge-feedback-provided",
                                                "Submission",
                                                "Registration",
                                                "challenge-finalists-selected",
                                                "state-change",
                                                "work-project-launched",
                                                "checkpoint1",
                                                "finalists",
                                                "final-design",
                                                "winner",
                                                "final-feedback",
                                                "completed"
                                        ]
                                },
                                "eventType": {
                                        "type": "string",
                                        "enum": [
                                                "timeline"
                                        ]
                                },
                                "sourceObjectContent": {
                                        "type": "object",
                                        "items": {
                                                "$ref": "#/definitions/SourceObjectContent"
                                        }
                                },
                                "fieldChanges": {
                                        "type": "string"
                                }
                        }
                },
                "SourceObjectContent": {
                        "properties": {
                                "version": {
                                        "type": "number"
                                },
                                "id": {
                                        "type": "string"
                                },
                                "modifiedBy": {
                                        "type": "string"
                                },
                                "modifiedAt": {
                                        "type": "string"
                                },
                                "createdBy": {
                                        "type": "string"
                                },
                                "createdAt": {
                                        "type": "number",
                                        "sample": 1427467795351
                                },
                                "name": {
                                        "type": "string"
                                },
                                "summary": {
                                        "type": "string"
                                },
                                "requestType": {
                                        "type": "string"
                                },
                                "ownerId": {
                                        "type": "string"
                                },
                                "competitorApps": {
                                        "type": "array",
                                        "sample": [
                                                "comp 0",
                                                "comp 1",
                                                "comp 2",
                                                "comp 3"
                                        ]
                                },
                                "usageDescription": {
                                        "type": "string"
                                },
                                "features": {
                                        "type": "array",
                                        "sample": [
                                                {
                                                        "name": "feature 1",
                                                        "description": "description 1"
                                                },
                                                {
                                                        "name": "feature 2",
                                                        "description": "description 2"
                                                }
                                        ]
                                },
                                "costEstimate": {
                                        "type": "object",
                                        "sample": {
                                                "low": "3600",
                                                "high": "4400"
                                        }
                                },
                                "status": {
                                        "type": "string"
                                },
                                "statusNotes": {
                                        "type": "string"
                                },
                                "copilotId": {
                                        "type": "string",
                                        "sample": "Batman9000"
                                },
                                "quotedAmount": {
                                        "type": "string",
                                        "sample": "$2000"
                                },
                                "challengeId": {
                                        "type": "string"
                                },
                                "tcDirectId": {
                                        "type": "string"
                                },
                                "registrants": {
                                        "type": "array",
                                        "sample": [
                                                {
                                                        "handle": "exampleHandle"
                                                }
                                        ]
                                },
                                "submissions": {
                                        "type": "array",
                                        "sample": [
                                                {
                                                        "submissionId": "1234"
                                                }
                                        ]
                                },
                                "phase": {
                                        "type": "string"
                                },
                                "phaseStatus": {
                                        "type": "string"
                                },
                                "userId": {
                                        "type": "string"
                                },
                                "workRequestId": {
                                        "type": "string"
                                }
                        }
                },
                "Error": {
                        "properties": {
                                "code": {
                                        "type": "integer",
                                        "format": "int32"
                                },
                                "message": {
                                        "type": "string"
                                },
                                "fields": {
                                        "type": "string"
                                }
                        }
                }
        }
},
    "swagger/v3-messages.json": {
        "swagger": "2.0",
        "info": {
                "description": "",
                "version": "",
                "title": ""
        },
        "host": "api.topcoder.com",
        "basePath": "/v3/messages",
        "schemes": [
                "https"
        ],
        "produces": [
                "application/json"
        ],
        "paths": {
                "": {
                        "post": {
                                "responses": {
                                        "200": {
                                                "schema": {
                                                        "type": "object",
                                                        "items": {
                                                                "$ref": "#/definitions/MessagePost"
                                                        }
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                },
                "/{id}": {
                        "put": {
                                "responses": {
                                        "200": {
                                                "schema": {
                                                        "type": "object",
                                                        "items": {
                                                                "$ref": "#/definitions/MessagePut"
                                                        }
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                },
                                "post": {
                                        "responses": {
                                                "200": {
                                                        "schema": {
                                                                "type": "object",
                                                                "items": {
                                                                        "$ref": "#/definitions/Message"
                                                                }
                                                        }
                                                },
                                                "default": {
                                                        "description": "Unexpected error",
                                                        "schema": {
                                                                "$ref": "#/definitions/Error"
                                                        }
                                                }
                                        }
                                }
                        }
                }
        },
        "definitions": {
                "MessagePut": {
                        "properties": {
                                "id": {
                                        "type": "string"
                                },
                                "result": {
                                        "type": "object",
                                        "items": {
                                                "$ref": "#/definitions/MessagePutResult"
                                        }
                                }
                        }
                },
                "MessagePutResult": {
                        "properties": {
                                "success": {
                                        "type": "boolean",
                                        "sample": true
                                },
                                "status": {
                                        "type": "integer",
                                        "sample": 200
                                },
                                "content": {
                                        "type": "null"
                                }
                        }
                },
                "MessagePost": {
                        "properties": {
                                "id": {
                                        "type": "string"
                                },
                                "result": {
                                        "type": "object",
                                        "items": {
                                                "$ref": "#/definitions/MessagePostResult"
                                        }
                                }
                        }
                },
                "MessagePostResult": {
                        "properties": {
                                "success": {
                                        "type": "boolean",
                                        "sample": true
                                },
                                "status": {
                                        "type": "integer",
                                        "sample": 200
                                },
                                "content": {
                                        "type": "array",
                                        "items": {
                                                "$ref": "#/definitions/MessagePostContent"
                                        }
                                }
                        }
                },
                "MessagePostContent": {
                        "properties": {
                                "threadId": {
                                        "type": "string"
                                },
                                "publisherId": {
                                        "type": "string"
                                },
                                "body": {
                                        "type": "string",
                                        "sample": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                },
                                "attachments": {
                                        "type": "array:",
                                        "items": {
                                                "$ref": "#/definitions/Attachment"
                                        }
                                }
                        }
                },
                "Attachment": {
                        "properties": {
                                "attachmentId": {
                                        "type": "string"
                                },
                                "name": {
                                        "type": "string"
                                },
                                "thumbUrl": {
                                        "type": "string"
                                },
                                "originalUrl": {
                                        "type": "string"
                                }
                        }
                },
                "Error": {
                        "properties": {
                                "code": {
                                        "type": "integer",
                                        "format": "int32"
                                },
                                "message": {
                                        "type": "string"
                                },
                                "fields": {
                                        "type": "string"
                                }
                        }
                }
        }
},
    "swagger/v3-threads.json": {
        "swagger": "2.0",
        "info": {
                "description": "",
                "version": "",
                "title": ""
        },
        "host": "api.topcoder.com",
        "basePath": "/v3/threads",
        "schemes": [
                "https"
        ],
        "produces": [
                "application/json"
        ],
        "paths": {
                "": {
                        "get": {
                                "responses": {
                                        "200": {
                                                "schema": {
                                                        "type": "object",
                                                        "items": {
                                                                "$ref": "#/definitions/ThreadWrapper"
                                                        }
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        },
                        "post": {
                                "responses": {
                                        "200": {
                                                "schema": {
                                                        "type": "object",
                                                        "items": {
                                                                "$ref": "#/definitions/ThreadPostWrapper"
                                                        }
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                },
                "/{id}": {
                        "get": {
                                "responses": {
                                        "200": {
                                                "schema": {
                                                        "type": "object",
                                                        "items": {
                                                                "$ref": "#/definitions/ThreadShowWrapper"
                                                        }
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                }
        },
        "definitions": {
                "ThreadShowWrapper": {
                        "properties": {
                                "id": {
                                        "type": "string"
                                },
                                "result": {
                                        "type": "object",
                                        "items": {
                                                "$ref": "#/definitions/ThreadShowResult"
                                        }
                                }
                        }
                },
                "ThreadShowResult": {
                        "properties": {
                                "success": {
                                        "type": "boolean",
                                        "sample": true
                                },
                                "status": {
                                        "type": "integer",
                                        "sample": 200
                                },
                                "content": {
                                        "type": "object",
                                        "items": {
                                                "$ref": "#/definitions/ThreadShowContent"
                                        }
                                }
                        }
                },
                "ThreadShowContent": {
                        "properties": {
                                "unreadCount": {
                                        "type": "number"
                                },
                                "subject": {
                                        "type": "string",
                                        "sample": "NASA - DTN Dashboard winner"
                                },
                                "messages": {
                                        "type": "array",
                                        "items": {
                                                "$ref": "#/definitions/Message"
                                        }
                                }
                        }
                },
                "ThreadPostWrapper": {
                        "properties": {
                                "id": {
                                        "type": "string"
                                },
                                "result": {
                                        "type": "object",
                                        "items": {
                                                "$ref": "#/definitions/ThreadPostResult"
                                        }
                                }
                        }
                },
                "ThreadPostResult": {
                        "properties": {
                                "success": {
                                        "type": "boolean",
                                        "sample": true
                                },
                                "status": {
                                        "type": "integer",
                                        "sample": 200
                                },
                                "content": {
                                        "type": "object",
                                        "items": {
                                                "$ref": "#/definitions/ThreadPostContent"
                                        }
                                }
                        }
                },
                "ThreadPostContent": {
                        "properties": {
                                "id": {
                                        "type": "string"
                                }
                        }
                },
                "ThreadWrapper": {
                        "properties": {
                                "id": {
                                        "type": "string"
                                },
                                "result": {
                                        "type": "object",
                                        "items": {
                                                "$ref": "#/definitions/ThreadResult"
                                        }
                                }
                        }
                },
                "ThreadResult": {
                        "properties": {
                                "success": {
                                        "type": "boolean",
                                        "sample": true
                                },
                                "status": {
                                        "type": "integer",
                                        "sample": 200
                                }
                        }
                },
                "ThreadContent": {
                        "properties": {
                                "unreadCount": {
                                        "type": "number"
                                },
                                "threads": {
                                        "type": "array",
                                        "items": {
                                                "$ref": "#/definitions/Thread"
                                        }
                                }
                        }
                },
                "Thread": {
                        "properties": {
                                "id": {
                                        "type": "string"
                                },
                                "unreadCount": {
                                        "type": "number"
                                },
                                "subject": {
                                        "type": "string",
                                        "sample": "NASA - DTN Dashboard winner"
                                },
                                "messages": {
                                        "type": "array",
                                        "items": {
                                                "$ref": "#/definitions/Message"
                                        }
                                }
                        }
                },
                "Message": {
                        "properties": {
                                "id": {
                                        "type": "string"
                                },
                                "threadId": {
                                        "type": "string"
                                },
                                "body": {
                                        "type": "string",
                                        "sample": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                },
                                "createdAt": {
                                        "type": "string",
                                        "sample": "2015-05-05T20:53:41.467Z"
                                },
                                "publisherId": {
                                        "type": "string",
                                        "sample": "Batman"
                                },
                                "read": {
                                        "type": "boolean"
                                },
                                "attachments": {
                                        "type": "array:",
                                        "items": {
                                                "$ref": "#/definitions/Attachment"
                                        }
                                }
                        }
                },
                "Error": {
                        "properties": {
                                "code": {
                                        "type": "integer",
                                        "format": "int32"
                                },
                                "thread": {
                                        "type": "string"
                                },
                                "fields": {
                                        "type": "string"
                                }
                        }
                }
        }
},
    "swagger/v3-users.json": {
        "swagger": "2.0",
        "info": {
                "description": "",
                "version": "",
                "title": ""
        },
        "host": "api.topcoder.com",
        "basePath": "/v3/users",
        "schemes": [
                "https"
        ],
        "produces": [
                "application/json"
        ],
        "paths": {
                "": {
                        "post": {
                                "responses": {
                                        "200": {
                                                "schema": {
                                                        "type": "object",
                                                        "items": {
                                                                "$ref": "#/definitions/User"
                                                        }
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                },
                "/{id}": {
                        "get": {
                                "responses": {
                                        "200": {
                                                "schema": {
                                                        "type": "object",
                                                        "items": {
                                                                "$ref": "#/definitions/User"
                                                        }
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                }
        },
        "definitions": {
                "User": {
                        "properties": {
                                "id": {
                                        "type": "string"
                                },
                                "result": {
                                        "type": "object",
                                        "items": {
                                                "$ref": "#/definitions/UserResult"
                                        }
                                }
                        }
                },
                "UserResult": {
                        "properties": {
                                "success": {
                                        "type": "boolean",
                                        "sample": true
                                },
                                "status": {
                                        "type": "integer",
                                        "sample": 200
                                },
                                "content": {
                                        "type": "object",
                                        "items": {
                                                "$ref": "#/definitions/UserContent"
                                        }
                                }
                        }
                },
                "UserContent": {
                        "properties": {
                                "id": {
                                        "type": "string"
                                },
                                "firstName": {
                                        "type": "string"
                                },
                                "handle": {
                                        "type": "string"
                                },
                                "credential": {
                                        "type": "object",
                                        "items": {
                                                "$ref": "#/definitions/Credential"
                                        }
                                }
                        }
                },
                "Credential": {
                        "properties": {
                                "id": {
                                        "type": "string"
                                },
                                "modifiedBy": {
                                        "type": "string"
                                },
                                "modifiedAt": {
                                        "type": "string"
                                },
                                "createdBy": {
                                        "type": "string"
                                },
                                "createdAt": {
                                        "type": "string"
                                },
                                "activationCode": {
                                        "type": "string",
                                        "sample": "13IOV95OEJQ"
                                },
                                "resetToken": {
                                        "type": "null"
                                }
                        }
                },
                "Error": {
                        "properties": {
                                "code": {
                                        "type": "integer",
                                        "format": "int32"
                                },
                                "message": {
                                        "type": "string"
                                },
                                "fields": {
                                        "type": "string"
                                }
                        }
                }
        }
},
    "swagger/v3-work.json": {
        "swagger": "2.0",
        "info": {
                "description": "",
                "version": "",
                "title": ""
        },
        "host": "api.topcoder.com",
        "basePath": "/v3/work",
        "schemes": [
                "https"
        ],
        "produces": [
                "application/json"
        ],
        "paths": {
                "": {
                        "post": {
                                "responses": {
                                        "200": {
                                                "schema": {
                                                        "type": "object",
                                                        "items": {
                                                                "$ref": "#/definitions/Work"
                                                        }
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                },
                "/{id}": {
                        "get": {
                                "responses": {
                                        "200": {
                                                "schema": {
                                                        "type": "object",
                                                        "items": {
                                                                "$ref": "#/definitions/Work"
                                                        }
                                                }
                                        },
                                        "default": {
                                                "description": "Unexpected error",
                                                "schema": {
                                                        "$ref": "#/definitions/Error"
                                                }
                                        }
                                }
                        }
                }
        },
        "definitions": {
                "Work": {
                        "properties": {
                                "id": {
                                        "type": "string"
                                },
                                "result": {
                                        "type": "object",
                                        "items": {
                                                "$ref": "#/definitions/WorkResult"
                                        }
                                }
                        }
                },
                "WorkResult": {
                        "properties": {
                                "success": {
                                        "type": "boolean",
                                        "sample": true
                                },
                                "status": {
                                        "type": "integer",
                                        "sample": 200
                                },
                                "content": {
                                        "type": "object",
                                        "items": {
                                                "$ref": "#/definitions/WorkContent"
                                        }
                                }
                        }
                },
                "WorkContent": {
                        "properties": {
                                "id": {
                                        "type": "string"
                                }
                        }
                },
                "Error": {
                        "properties": {
                                "code": {
                                        "type": "integer",
                                        "format": "int32"
                                },
                                "message": {
                                        "type": "string"
                                },
                                "fields": {
                                        "type": "string"
                                }
                        }
                }
        }
},
    "apiary/apcopilotservice.json": {
        "ast": {
                "_version": "3.0",
                "metadata": [
                        {
                                "name": "FORMAT",
                                "value": "1A"
                        },
                        {
                                "name": "HOST",
                                "value": "https://api.topcoder.com/v3"
                        }
                ],
                "name": "ap-copilot-service",
                "description": "The Copilot Service manages copilot assignment to [Work Requests](http://docs.apworkmicroservice.apiary.io/#)\nand provides workflow management for the copilot between project claim and project launch.\n\n",
                "element": "category",
                "resourceGroups": [
                        {
                                "name": "Copilot Management",
                                "description": "Admin functionality to manage Copilots. Copilots can claim projects and alter the workflow state of their own Projects.\n\n",
                                "resources": [
                                        {
                                                "element": "resource",
                                                "name": "Aggregate Calls",
                                                "description": "",
                                                "uriTemplate": "/copilots",
                                                "model": {},
                                                "parameters": [],
                                                "actions": [
                                                        {
                                                                "name": "List Copilots",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b8b\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n      {\n        \"id\": \"40003332\"\n      },\n      {\n        \"id\": \"40003788\"\n      },\n      {\n        \"id\": \"9938992\"\n      }\n    ]\n  },\n  \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b8b\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n      {\n        \"id\": \"40003332\"\n      },\n      {\n        \"id\": \"40003788\"\n      },\n      {\n        \"id\": \"9938992\"\n      }\n    ]\n  },\n  \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Add a Copilot",
                                                                "description": "",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"<copilot_user_id>\",\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"<copilot_user_id>\",\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b8b\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": {\n      \"id\": \"40003332\"\n    }\n  },\n  \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b8b\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": {\n      \"id\": \"40003332\"\n    }\n  },\n  \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        },
                                        {
                                                "element": "resource",
                                                "name": "Individual Calls",
                                                "description": "",
                                                "uriTemplate": "/copilots/{copilot_id}",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "copilot_id",
                                                                "description": "The copilot's User Id",
                                                                "type": "",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "View a Copilot",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b8b\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": {\n      \"id\": \"40003332\"\n    }\n  },\n  \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b8b\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": {\n      \"id\": \"40003332\"\n    }\n  },\n  \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        }
                                ]
                        },
                        {
                                "name": "Copilot Project Management",
                                "description": "Copilot functionality to claim a project and manage its workflow. It is composed of attributes and subobjects as follows:\n\n#### Project Attributes\n\n+ status - one of \n    + \"claimed\"\n    + \"estimated\"\n    + \"approved\"\n    + \"launched\"\n    \n\n+ estimate - An Estimate object\n\nAn estimate must be supplied on transition to the \"estimated\" status, and is ignored if supplied on any other status transition.\n\nStatus transitions must be in order, may not move backwards, and the status is preset to \"claimed\" on initial project claim.\n\n#### Estimate Attributes\n\n+ complexity - one of\n    + \"high\"\n    + \"medium\"\n    + \"low\"\n\n+ difficultyExplanation\n\n+ challengeEstimates - an array of Challenge Estimates\n\n#### Challenge Estimate Attributes\n\n+ count\n\n+ challengeType - one of\n    + \"Assembly\"\n    + \"Design\"\n    + \"Development\"\n    + \"Conceptualization\"\n    + \"Architecture\"\n    + \"Test_Scenarios\"\n    + \"Test_Suites\"\n    + \"Code\"\n    + \"F2F\"\n    + \"Other_tracks\"\n    + \"Studio\"\n\n\n",
                                "resources": [
                                        {
                                                "element": "resource",
                                                "name": "Aggregate Calls",
                                                "description": "",
                                                "uriTemplate": "/copilots/{copilot_id}/projects",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "copilot_id",
                                                                "description": "The copilot's User Id",
                                                                "type": "",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "List Projects",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b4c\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n      {\n        \"id\": \"1435703595431-63f797b5-f985-4dab-a8fb-fd4a5b6ca102\",\n        \"estimate\": {\n          \"challengeEstimates\": [\n            {\n              \"count\": 1,\n              \"challengeType\": \"Design\"\n            }\n          ],\n          \"complexity\": \"low\",\n          \"difficultyExplanation\": \"aDADFASF\"\n        },\n        \"status\": \"estimated\"\n      },\n      {\n        \"id\": \"1436166664088-a3b93b26-49ff-44e5-bbda-5515ff46cdbb\",\n        \"estimate\": {\n          \"challengeEstimates\": [\n            {\n              \"count\": 1,\n              \"challengeType\": \"Design\"\n            }\n          ],\n          \"complexity\": \"low\",\n          \"difficultyExplanation\": \"asdfasdfasdf\"\n        },\n        \"status\": \"estimated\"\n      }\n    ]\n  },\n  \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b4c\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n      {\n        \"id\": \"1435703595431-63f797b5-f985-4dab-a8fb-fd4a5b6ca102\",\n        \"estimate\": {\n          \"challengeEstimates\": [\n            {\n              \"count\": 1,\n              \"challengeType\": \"Design\"\n            }\n          ],\n          \"complexity\": \"low\",\n          \"difficultyExplanation\": \"aDADFASF\"\n        },\n        \"status\": \"estimated\"\n      },\n      {\n        \"id\": \"1436166664088-a3b93b26-49ff-44e5-bbda-5515ff46cdbb\",\n        \"estimate\": {\n          \"challengeEstimates\": [\n            {\n              \"count\": 1,\n              \"challengeType\": \"Design\"\n            }\n          ],\n          \"complexity\": \"low\",\n          \"difficultyExplanation\": \"asdfasdfasdf\"\n        },\n        \"status\": \"estimated\"\n      }\n    ]\n  },\n  \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Claim a Project",
                                                                "description": "",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"<work_request_id>\",\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"<work_request_id>\",\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b3e\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": {\n      \"id\": \"1436166602015-15db7fc1-c2a6-461b-8278-4b89eaf92740\",\n      \"estimate\": null,\n      \"status\": \"claimed\"\n    }\n  },\n  \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b3e\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": {\n      \"id\": \"1436166602015-15db7fc1-c2a6-461b-8278-4b89eaf92740\",\n      \"estimate\": null,\n      \"status\": \"claimed\"\n    }\n  },\n  \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        },
                                        {
                                                "element": "resource",
                                                "name": "Individual Calls",
                                                "description": "",
                                                "uriTemplate": "/copilots/{copilot_id}/projects/{project_id}",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "copilot_id",
                                                                "description": "The copilot's User Id",
                                                                "type": "",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        },
                                                        {
                                                                "name": "project_id",
                                                                "description": "The Work Request Id",
                                                                "type": "",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "View a Project",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b3e\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": {\n      \"id\": \"1436166602015-15db7fc1-c2a6-461b-8278-4b89eaf92740\",\n      \"estimate\": {\n        \"challengeEstimates\": [\n          {\n            \"count\": 1,\n            \"challengeType\": \"Design\"\n          }\n        ],\n        \"complexity\": \"low\",\n        \"difficultyExplanation\": \"foo\"\n      },\n      \"status\": \"estimated\"\n    }\n  },\n  \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b3e\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": {\n      \"id\": \"1436166602015-15db7fc1-c2a6-461b-8278-4b89eaf92740\",\n      \"estimate\": {\n        \"challengeEstimates\": [\n          {\n            \"count\": 1,\n            \"challengeType\": \"Design\"\n          }\n        ],\n        \"complexity\": \"low\",\n        \"difficultyExplanation\": \"foo\"\n      },\n      \"status\": \"estimated\"\n    }\n  },\n  \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Update a Project",
                                                                "description": "",
                                                                "method": "PUT",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": <ignored>,\n    \"estimate\": {\n        \"challengeEstimates\": [\n          {\n            \"count\": 1,\n            \"challengeType\": \"Design\"\n          }\n        ],\n        \"complexity\": \"low\",\n        \"difficultyExplanation\": \"foo\"\n      },\n      \"status\": \"estimated\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": <ignored>,\n    \"estimate\": {\n        \"challengeEstimates\": [\n          {\n            \"count\": 1,\n            \"challengeType\": \"Design\"\n          }\n        ],\n        \"complexity\": \"low\",\n        \"difficultyExplanation\": \"foo\"\n      },\n      \"status\": \"estimated\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b3e\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": {\n      \"id\": \"1436166602015-15db7fc1-c2a6-461b-8278-4b89eaf92740\",\n      \"estimate\": {\n        \"challengeEstimates\": [\n          {\n            \"count\": 1,\n            \"challengeType\": \"Design\"\n          }\n        ],\n        \"complexity\": \"low\",\n        \"difficultyExplanation\": \"foo\"\n      },\n      \"status\": \"estimated\"\n    }\n  },\n  \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b3e\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": {\n      \"id\": \"1436166602015-15db7fc1-c2a6-461b-8278-4b89eaf92740\",\n      \"estimate\": {\n        \"challengeEstimates\": [\n          {\n            \"count\": 1,\n            \"challengeType\": \"Design\"\n          }\n        ],\n        \"complexity\": \"low\",\n        \"difficultyExplanation\": \"foo\"\n      },\n      \"status\": \"estimated\"\n    }\n  },\n  \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        }
                                ]
                        }
                ],
                "content": [
                        {
                                "element": "category",
                                "attributes": {
                                        "name": "Copilot Management"
                                },
                                "content": [
                                        {
                                                "element": "copy",
                                                "content": "Admin functionality to manage Copilots. Copilots can claim projects and alter the workflow state of their own Projects.\n\n"
                                        },
                                        {
                                                "element": "resource",
                                                "name": "Aggregate Calls",
                                                "description": "",
                                                "uriTemplate": "/copilots",
                                                "model": {},
                                                "parameters": [],
                                                "actions": [
                                                        {
                                                                "name": "List Copilots",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b8b\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n      {\n        \"id\": \"40003332\"\n      },\n      {\n        \"id\": \"40003788\"\n      },\n      {\n        \"id\": \"9938992\"\n      }\n    ]\n  },\n  \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b8b\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n      {\n        \"id\": \"40003332\"\n      },\n      {\n        \"id\": \"40003788\"\n      },\n      {\n        \"id\": \"9938992\"\n      }\n    ]\n  },\n  \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Add a Copilot",
                                                                "description": "",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"<copilot_user_id>\",\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"<copilot_user_id>\",\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b8b\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": {\n      \"id\": \"40003332\"\n    }\n  },\n  \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b8b\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": {\n      \"id\": \"40003332\"\n    }\n  },\n  \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        },
                                        {
                                                "element": "resource",
                                                "name": "Individual Calls",
                                                "description": "",
                                                "uriTemplate": "/copilots/{copilot_id}",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "copilot_id",
                                                                "description": "The copilot's User Id",
                                                                "type": "",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "View a Copilot",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b8b\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": {\n      \"id\": \"40003332\"\n    }\n  },\n  \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b8b\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": {\n      \"id\": \"40003332\"\n    }\n  },\n  \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        }
                                ]
                        },
                        {
                                "element": "category",
                                "attributes": {
                                        "name": "Copilot Project Management"
                                },
                                "content": [
                                        {
                                                "element": "copy",
                                                "content": "Copilot functionality to claim a project and manage its workflow. It is composed of attributes and subobjects as follows:\n\n#### Project Attributes\n\n+ status - one of \n    + \"claimed\"\n    + \"estimated\"\n    + \"approved\"\n    + \"launched\"\n    \n\n+ estimate - An Estimate object\n\nAn estimate must be supplied on transition to the \"estimated\" status, and is ignored if supplied on any other status transition.\n\nStatus transitions must be in order, may not move backwards, and the status is preset to \"claimed\" on initial project claim.\n\n#### Estimate Attributes\n\n+ complexity - one of\n    + \"high\"\n    + \"medium\"\n    + \"low\"\n\n+ difficultyExplanation\n\n+ challengeEstimates - an array of Challenge Estimates\n\n#### Challenge Estimate Attributes\n\n+ count\n\n+ challengeType - one of\n    + \"Assembly\"\n    + \"Design\"\n    + \"Development\"\n    + \"Conceptualization\"\n    + \"Architecture\"\n    + \"Test_Scenarios\"\n    + \"Test_Suites\"\n    + \"Code\"\n    + \"F2F\"\n    + \"Other_tracks\"\n    + \"Studio\"\n\n\n"
                                        },
                                        {
                                                "element": "resource",
                                                "name": "Aggregate Calls",
                                                "description": "",
                                                "uriTemplate": "/copilots/{copilot_id}/projects",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "copilot_id",
                                                                "description": "The copilot's User Id",
                                                                "type": "",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "List Projects",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b4c\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n      {\n        \"id\": \"1435703595431-63f797b5-f985-4dab-a8fb-fd4a5b6ca102\",\n        \"estimate\": {\n          \"challengeEstimates\": [\n            {\n              \"count\": 1,\n              \"challengeType\": \"Design\"\n            }\n          ],\n          \"complexity\": \"low\",\n          \"difficultyExplanation\": \"aDADFASF\"\n        },\n        \"status\": \"estimated\"\n      },\n      {\n        \"id\": \"1436166664088-a3b93b26-49ff-44e5-bbda-5515ff46cdbb\",\n        \"estimate\": {\n          \"challengeEstimates\": [\n            {\n              \"count\": 1,\n              \"challengeType\": \"Design\"\n            }\n          ],\n          \"complexity\": \"low\",\n          \"difficultyExplanation\": \"asdfasdfasdf\"\n        },\n        \"status\": \"estimated\"\n      }\n    ]\n  },\n  \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b4c\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n      {\n        \"id\": \"1435703595431-63f797b5-f985-4dab-a8fb-fd4a5b6ca102\",\n        \"estimate\": {\n          \"challengeEstimates\": [\n            {\n              \"count\": 1,\n              \"challengeType\": \"Design\"\n            }\n          ],\n          \"complexity\": \"low\",\n          \"difficultyExplanation\": \"aDADFASF\"\n        },\n        \"status\": \"estimated\"\n      },\n      {\n        \"id\": \"1436166664088-a3b93b26-49ff-44e5-bbda-5515ff46cdbb\",\n        \"estimate\": {\n          \"challengeEstimates\": [\n            {\n              \"count\": 1,\n              \"challengeType\": \"Design\"\n            }\n          ],\n          \"complexity\": \"low\",\n          \"difficultyExplanation\": \"asdfasdfasdf\"\n        },\n        \"status\": \"estimated\"\n      }\n    ]\n  },\n  \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Claim a Project",
                                                                "description": "",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"<work_request_id>\",\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"<work_request_id>\",\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b3e\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": {\n      \"id\": \"1436166602015-15db7fc1-c2a6-461b-8278-4b89eaf92740\",\n      \"estimate\": null,\n      \"status\": \"claimed\"\n    }\n  },\n  \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b3e\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": {\n      \"id\": \"1436166602015-15db7fc1-c2a6-461b-8278-4b89eaf92740\",\n      \"estimate\": null,\n      \"status\": \"claimed\"\n    }\n  },\n  \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        },
                                        {
                                                "element": "resource",
                                                "name": "Individual Calls",
                                                "description": "",
                                                "uriTemplate": "/copilots/{copilot_id}/projects/{project_id}",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "copilot_id",
                                                                "description": "The copilot's User Id",
                                                                "type": "",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        },
                                                        {
                                                                "name": "project_id",
                                                                "description": "The Work Request Id",
                                                                "type": "",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "View a Project",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b3e\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": {\n      \"id\": \"1436166602015-15db7fc1-c2a6-461b-8278-4b89eaf92740\",\n      \"estimate\": {\n        \"challengeEstimates\": [\n          {\n            \"count\": 1,\n            \"challengeType\": \"Design\"\n          }\n        ],\n        \"complexity\": \"low\",\n        \"difficultyExplanation\": \"foo\"\n      },\n      \"status\": \"estimated\"\n    }\n  },\n  \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b3e\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": {\n      \"id\": \"1436166602015-15db7fc1-c2a6-461b-8278-4b89eaf92740\",\n      \"estimate\": {\n        \"challengeEstimates\": [\n          {\n            \"count\": 1,\n            \"challengeType\": \"Design\"\n          }\n        ],\n        \"complexity\": \"low\",\n        \"difficultyExplanation\": \"foo\"\n      },\n      \"status\": \"estimated\"\n    }\n  },\n  \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Update a Project",
                                                                "description": "",
                                                                "method": "PUT",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": <ignored>,\n    \"estimate\": {\n        \"challengeEstimates\": [\n          {\n            \"count\": 1,\n            \"challengeType\": \"Design\"\n          }\n        ],\n        \"complexity\": \"low\",\n        \"difficultyExplanation\": \"foo\"\n      },\n      \"status\": \"estimated\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": <ignored>,\n    \"estimate\": {\n        \"challengeEstimates\": [\n          {\n            \"count\": 1,\n            \"challengeType\": \"Design\"\n          }\n        ],\n        \"complexity\": \"low\",\n        \"difficultyExplanation\": \"foo\"\n      },\n      \"status\": \"estimated\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b3e\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": {\n      \"id\": \"1436166602015-15db7fc1-c2a6-461b-8278-4b89eaf92740\",\n      \"estimate\": {\n        \"challengeEstimates\": [\n          {\n            \"count\": 1,\n            \"challengeType\": \"Design\"\n          }\n        ],\n        \"complexity\": \"low\",\n        \"difficultyExplanation\": \"foo\"\n      },\n      \"status\": \"estimated\"\n    }\n  },\n  \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n  \"id\": \"405fe2a8:14e46881ce6:-7b3e\",\n  \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": {\n      \"id\": \"1436166602015-15db7fc1-c2a6-461b-8278-4b89eaf92740\",\n      \"estimate\": {\n        \"challengeEstimates\": [\n          {\n            \"count\": 1,\n            \"challengeType\": \"Design\"\n          }\n        ],\n        \"complexity\": \"low\",\n        \"difficultyExplanation\": \"foo\"\n      },\n      \"status\": \"estimated\"\n    }\n  },\n  \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        }
                                ]
                        }
                ]
        },
        "warnings": [],
        "sourcemap": null
},
    "apiary/apworkmicroservice.json": {
        "ast": {
                "_version": "3.0",
                "metadata": [
                        {
                                "name": "FORMAT",
                                "value": "1A"
                        },
                        {
                                "name": "HOST",
                                "value": "https://api.topcoder.com/v3"
                        }
                ],
                "name": "ap-work-microservice",
                "description": "The Work microservice manages work done by the community. \nWork is a general term but currently only represents the `app-project` type. Support\nfor other work types will be added in the future.\n\nWork objects can also be hierarchical via the use of the `parentId` field.\n\n",
                "element": "category",
                "resourceGroups": [
                        {
                                "name": "work",
                                "description": "",
                                "resources": [
                                        {
                                                "element": "resource",
                                                "name": "Work Management",
                                                "description": "All requests are constrained to the user making the request unless otherwise noted.\n\nWork objects have the following common fields:\n\n+ `name`: text string used as a label for the object\n\n+ `parentId`: an optional field used to indicate the parent work object's id\n\n+ `modelType`: specifies the type of work object (currently only \"app-project\")\n\n**App Project**\n\nAn app project is a type of work object that is used to manage work to be done by the\ncommunity in order to build an application. \nAn app project contains the following app project-specific fields:\n\n+ `summary`: text summary of the project\n\n+ `requestType`: what type of work is being requested\n\n+ `competitorApps`: an array of strings representing names of competitor apps that should be used as a reference\n\n+ `usageDescription`: an description of how the app will be used\n\n+ `features`: an object that has the following attributes\n    + `name`: the name of the feature\n    + `description`: a description of the feature\n    + `explanation`: an explanation of the feature\n    + `custom`: whether this is a custom feature or not\n\n+ `status`: indicates the overall status of the project\n\n+ `statusNotes`: can be used to provide more detail about the current status\n\n+ `copilotId`: the user id of the co-pilot assigned to the project\n\n+ `quotedAmount`: a string representing the price of the project\n\n+ `price`: a decimal representing the price of the project\n\n+ `priceCurrency`: the ISO 4217 currency code for the price of the project\n\n+ `tcDirectId`: the id of the topcoder Direct project id that corresponds to the project\n\n",
                                                "uriTemplate": "/work",
                                                "model": {},
                                                "parameters": [],
                                                "actions": [
                                                        {
                                                                "name": "Create Work",
                                                                "description": "Creates a new work object. The type of work object is specified with the `modelType` field.\n\n",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    {\n        \"competitorApps\" : [ \"comp 1\", \"comp 2\", \"comp 3\" ],\n        \"usageDescription\" : \"usage2222\",\n        \"features\" : [ {\n                \"name\" : \"feature1\",\n                \"description\" : \"desc1\"\n            }, {\n                \"name\" : \"feature2\",\n                \"description\" : \"desc2\"\n        } ],\n        \"modelType\": \"app-project\",\n        \"name\" : \"new project001\",\n        \"summary\" : \"test summary\",\n        \"requestType\":\"Design&Code\",\n        \"status\": \"Assigned\",\n        \"statusNotes\": \"noted\",\n        \"copilotId\": \"12345\",\n        \"tcDirectId\": \"23456\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    {\n        \"competitorApps\" : [ \"comp 1\", \"comp 2\", \"comp 3\" ],\n        \"usageDescription\" : \"usage2222\",\n        \"features\" : [ {\n                \"name\" : \"feature1\",\n                \"description\" : \"desc1\"\n            }, {\n                \"name\" : \"feature2\",\n                \"description\" : \"desc2\"\n        } ],\n        \"modelType\": \"app-project\",\n        \"name\" : \"new project001\",\n        \"summary\" : \"test summary\",\n        \"requestType\":\"Design&Code\",\n        \"status\": \"Assigned\",\n        \"statusNotes\": \"noted\",\n        \"copilotId\": \"12345\",\n        \"tcDirectId\": \"23456\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45de\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45de\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Update Work",
                                                                "description": "Updates an existing work object. The requester must be the owner of the work object.\n\n",
                                                                "method": "PUT",
                                                                "parameters": [
                                                                        {
                                                                                "name": "workId",
                                                                                "description": "the id of the work object",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work/{workId}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    {\n        \"competitorApps\" : [ \"comp 1\", \"comp 2\", \"comp 3\" ],\n        \"usageDescription\" : \"usage2222\",\n        \"features\" : [ {\n                \"name\" : \"feature1\",\n                \"description\" : \"desc1\"\n            }, {\n                \"name\" : \"feature2\",\n                \"description\" : \"desc2\"\n        } ],\n        \"name\" : \"new project001\",\n        \"summary\" : \"test summary\",\n        \"requestType\":\"Design&Code\",\n        \"status\": \"Assigned\",\n        \"statusNotes\": \"noted\",\n        \"copilotId\": \"12345\",\n        \"tcDirectId\": \"23456\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    {\n        \"competitorApps\" : [ \"comp 1\", \"comp 2\", \"comp 3\" ],\n        \"usageDescription\" : \"usage2222\",\n        \"features\" : [ {\n                \"name\" : \"feature1\",\n                \"description\" : \"desc1\"\n            }, {\n                \"name\" : \"feature2\",\n                \"description\" : \"desc2\"\n        } ],\n        \"name\" : \"new project001\",\n        \"summary\" : \"test summary\",\n        \"requestType\":\"Design&Code\",\n        \"status\": \"Assigned\",\n        \"statusNotes\": \"noted\",\n        \"copilotId\": \"12345\",\n        \"tcDirectId\": \"23456\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45dc\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45dc\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get Work",
                                                                "description": "Retrieves a specific work object\n\n",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "workId",
                                                                                "description": "the id of the work object",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work/{workId}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d6\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n            \"modifiedBy\": \"40097202\",\n            \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n            \"createdBy\": \"40097202\",\n            \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n            \"name\": \"new project001\",\n            \"summary\": \"test summary\\ntesting1234\",\n            \"requestType\": \"Design\",\n            \"ownerId\": \"40097202\",\n            \"version\": 2,\n            \"competitorApps\": [\n                \"comp 1\",\n                \"comp 2\",\n                \"comp 3\"\n            ],\n            \"usageDescription\": \"usage2222\",\n            \"features\": [\n                {\n                    \"name\": \"feature1\",\n                    \"description\": \"desc1\",\n                    \"explanation\": null,\n                    \"custom\": null\n                },\n                {\n                    \"name\": \"feature2\",\n                    \"description\": \"desc2\",\n                    \"explanation\": null,\n                    \"custom\": null\n                }\n            ],\n            \"status\": \"Created\",\n            \"statusNotes\": null,\n            \"copilotId\": \"unassigned\",\n            \"quotedAmount\": null,\n            \"tcDirectId\": null,\n            \"price\": 0,\n            \"priceCurrency\": null,\n            \"parentId\": \"none\"\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d6\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n            \"modifiedBy\": \"40097202\",\n            \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n            \"createdBy\": \"40097202\",\n            \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n            \"name\": \"new project001\",\n            \"summary\": \"test summary\\ntesting1234\",\n            \"requestType\": \"Design\",\n            \"ownerId\": \"40097202\",\n            \"version\": 2,\n            \"competitorApps\": [\n                \"comp 1\",\n                \"comp 2\",\n                \"comp 3\"\n            ],\n            \"usageDescription\": \"usage2222\",\n            \"features\": [\n                {\n                    \"name\": \"feature1\",\n                    \"description\": \"desc1\",\n                    \"explanation\": null,\n                    \"custom\": null\n                },\n                {\n                    \"name\": \"feature2\",\n                    \"description\": \"desc2\",\n                    \"explanation\": null,\n                    \"custom\": null\n                }\n            ],\n            \"status\": \"Created\",\n            \"statusNotes\": null,\n            \"copilotId\": \"unassigned\",\n            \"quotedAmount\": null,\n            \"tcDirectId\": null,\n            \"price\": 0,\n            \"priceCurrency\": null,\n            \"parentId\": \"none\"\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get All Work",
                                                                "description": "Retrieves all work objects owned by the user.\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d5\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-03-27T14:48:22.613Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-03-27T14:48:22.613Z\",\n                \"name\": \"testname\",\n                \"summary\": \"test summary\\ntesting\",\n                \"requestType\": null,\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"costEstimate\": null,\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": null,\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            },\n            {\n                \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n                \"name\": \"new project001\",\n                \"summary\": \"test summary\\ntesting1234\",\n                \"requestType\": \"Design\",\n                \"ownerId\": \"40097202\",\n                \"version\": 2,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": \"unassigned\",\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\"\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d5\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-03-27T14:48:22.613Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-03-27T14:48:22.613Z\",\n                \"name\": \"testname\",\n                \"summary\": \"test summary\\ntesting\",\n                \"requestType\": null,\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"costEstimate\": null,\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": null,\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            },\n            {\n                \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n                \"name\": \"new project001\",\n                \"summary\": \"test summary\\ntesting1234\",\n                \"requestType\": \"Design\",\n                \"ownerId\": \"40097202\",\n                \"version\": 2,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": \"unassigned\",\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\"\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Query Work",
                                                                "description": "Queries for work objects. NOTE: the `filter` parameter value must be URL encoded since it\nis a URL parameter.\n\nSome useful queries:\n\n+ Find all root app-projects (modelType = app-project AND parentId = \"none\"): `modelType%3Dapp-project%26parentId%3Dnone` \n\n    *note the value `none` is used to indicate no parent*\n\n+ Find all children of a given object (parentId = \\<id\\>): `parentId%3D1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56`\n\n",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "filterParam",
                                                                                "description": "query filter",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "modelType%3Dapp-project%26parentId%3Dnone",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work?filter={filterParam}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d5\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-03-27T14:48:22.613Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-03-27T14:48:22.613Z\",\n                \"name\": \"testname\",\n                \"summary\": \"test summary\\ntesting\",\n                \"requestType\": null,\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"costEstimate\": null,\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": null,\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            },\n            {\n                \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n                \"name\": \"new project001\",\n                \"summary\": \"test summary\\ntesting1234\",\n                \"requestType\": \"Design\",\n                \"ownerId\": \"40097202\",\n                \"version\": 2,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": \"unassigned\",\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d5\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-03-27T14:48:22.613Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-03-27T14:48:22.613Z\",\n                \"name\": \"testname\",\n                \"summary\": \"test summary\\ntesting\",\n                \"requestType\": null,\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"costEstimate\": null,\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": null,\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            },\n            {\n                \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n                \"name\": \"new project001\",\n                \"summary\": \"test summary\\ntesting1234\",\n                \"requestType\": \"Design\",\n                \"ownerId\": \"40097202\",\n                \"version\": 2,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": \"unassigned\",\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Retrieve work events",
                                                                "description": "Retrieves an event timeline for a work object. \nCurrently events are generated only for `app-project` work objects.\n\nA work event has the following attributes:\n\n+ `workId`: Id of the work object the events are associated with\n\n+ `eventType`: Currently the only type is `timeline`\n\n+ `eventSubType`: a sub-categorization of the type of event.\n\n+ `sourceObjectType`: the type of object contained in the `sourceObjectContent` attribute. The current types are `app-project` and `challengedata`\n\n+ `sourceObjectContent`: the object is an `app-project` or `challengedata`\n\n\n**challengedata**\n\nA challengedata object contains information about a challenge state transition. It\nhas the following attributes:\n\n+ `challengeId`: Id of the topcoder challenge\n\n+ `tcDirectId`: Id of the topcoder Direct project associated with the challenge\n\n+ `phase`: The phase that the challenge is transitioning **from**. Current values are `Registration` and `Submission`\n\n+ `registrants`: An array of objects with a `handle` attribute. The handle is the topcoder user handle\n\n+ `submissions`: An array of objects with a `submissionId` attribute. The submissionId is the id of the topcoder submission\n\n\n",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "workId",
                                                                                "description": "the id of the work object",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work/{workId}/events"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"36b5ae4:14e73b40167:-7ff2\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1436460345901-e39b039d-d3e0-450d-8c89-ff0d3a5fdf50\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-07-09T09:45:45.901-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-07-09T09:45:45.901-07:00\",\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"app-project\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"created\",\n                \"sourceObjectContent\": {\n                    \"id\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                    \"modifiedBy\": \"40097202\",\n                    \"modifiedAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"createdBy\": \"40097202\",\n                    \"createdAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"ownerId\": \"40097202\",\n                    \"version\": 1,\n                    \"name\": \"event test\",\n                    \"parentId\": \"none\",\n                    \"summary\": null,\n                    \"requestType\": null,\n                    \"competitorApps\": null,\n                    \"usageDescription\": null,\n                    \"features\": null,\n                    \"costEstimate\": null,\n                    \"status\": null,\n                    \"statusNotes\": null,\n                    \"copilotId\": \"test-copilot-id\",\n                    \"quotedAmount\": null,\n                    \"tcDirectId\": null,\n                    \"price\": 0,\n                    \"priceCurrency\": null,\n                    \"modelType\": \"app-project\"\n                },\n                \"userId\": null\n            },\n            {\n                \"id\": \"1436460443827-65e55dfe-4bf7-4df3-9e82-1b3c48ecee2f\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-07-09T09:47:23.827-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-07-09T09:47:23.827-07:00\",\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"app-project\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"copilot-assigned\",\n                \"sourceObjectContent\": {\n                    \"id\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                    \"modifiedBy\": \"40097202\",\n                    \"modifiedAt\": \"2015-07-09T16:47:23.709Z\",\n                    \"createdBy\": \"40097202\",\n                    \"createdAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"ownerId\": \"40097202\",\n                    \"version\": 3,\n                    \"name\": \"event test\",\n                    \"parentId\": \"none\",\n                    \"summary\": null,\n                    \"requestType\": null,\n                    \"competitorApps\": null,\n                    \"usageDescription\": null,\n                    \"features\": null,\n                    \"costEstimate\": null,\n                    \"status\": null,\n                    \"statusNotes\": null,\n                    \"copilotId\": \"new-copilot-id\",\n                    \"quotedAmount\": null,\n                    \"tcDirectId\": null,\n                    \"price\": 0,\n                    \"priceCurrency\": null,\n                    \"modelType\": \"app-project\"\n                },\n                \"userId\": null\n            },\n            {\n                \"id\": \"1436465238043-e51c4699-6a8c-48c7-95d1-fd6c50dca93c\",\n                \"modifiedBy\": null,\n                \"modifiedAt\": \"2015-07-09T11:07:18.043-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": null,\n                \"ownerId\": null,\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"challengedata\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"Registration\",\n                \"sourceObjectContent\": {\n                    \"challengeId\": \"30049280\",\n                    \"tcDirectId\": \"8646\",\n                    \"registrants\": [\n                        {\n                            \"handle\": \"reguser\"\n                        }\n                    ],\n                    \"submissions\": null,\n                    \"phase\": \"Registration\",\n                    \"phaseStatus\": \"Open\",\n                    \"userId\": null,\n                    \"workRequestId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\"\n                },\n                \"userId\": null\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"36b5ae4:14e73b40167:-7ff2\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1436460345901-e39b039d-d3e0-450d-8c89-ff0d3a5fdf50\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-07-09T09:45:45.901-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-07-09T09:45:45.901-07:00\",\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"app-project\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"created\",\n                \"sourceObjectContent\": {\n                    \"id\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                    \"modifiedBy\": \"40097202\",\n                    \"modifiedAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"createdBy\": \"40097202\",\n                    \"createdAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"ownerId\": \"40097202\",\n                    \"version\": 1,\n                    \"name\": \"event test\",\n                    \"parentId\": \"none\",\n                    \"summary\": null,\n                    \"requestType\": null,\n                    \"competitorApps\": null,\n                    \"usageDescription\": null,\n                    \"features\": null,\n                    \"costEstimate\": null,\n                    \"status\": null,\n                    \"statusNotes\": null,\n                    \"copilotId\": \"test-copilot-id\",\n                    \"quotedAmount\": null,\n                    \"tcDirectId\": null,\n                    \"price\": 0,\n                    \"priceCurrency\": null,\n                    \"modelType\": \"app-project\"\n                },\n                \"userId\": null\n            },\n            {\n                \"id\": \"1436460443827-65e55dfe-4bf7-4df3-9e82-1b3c48ecee2f\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-07-09T09:47:23.827-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-07-09T09:47:23.827-07:00\",\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"app-project\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"copilot-assigned\",\n                \"sourceObjectContent\": {\n                    \"id\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                    \"modifiedBy\": \"40097202\",\n                    \"modifiedAt\": \"2015-07-09T16:47:23.709Z\",\n                    \"createdBy\": \"40097202\",\n                    \"createdAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"ownerId\": \"40097202\",\n                    \"version\": 3,\n                    \"name\": \"event test\",\n                    \"parentId\": \"none\",\n                    \"summary\": null,\n                    \"requestType\": null,\n                    \"competitorApps\": null,\n                    \"usageDescription\": null,\n                    \"features\": null,\n                    \"costEstimate\": null,\n                    \"status\": null,\n                    \"statusNotes\": null,\n                    \"copilotId\": \"new-copilot-id\",\n                    \"quotedAmount\": null,\n                    \"tcDirectId\": null,\n                    \"price\": 0,\n                    \"priceCurrency\": null,\n                    \"modelType\": \"app-project\"\n                },\n                \"userId\": null\n            },\n            {\n                \"id\": \"1436465238043-e51c4699-6a8c-48c7-95d1-fd6c50dca93c\",\n                \"modifiedBy\": null,\n                \"modifiedAt\": \"2015-07-09T11:07:18.043-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": null,\n                \"ownerId\": null,\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"challengedata\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"Registration\",\n                \"sourceObjectContent\": {\n                    \"challengeId\": \"30049280\",\n                    \"tcDirectId\": \"8646\",\n                    \"registrants\": [\n                        {\n                            \"handle\": \"reguser\"\n                        }\n                    ],\n                    \"submissions\": null,\n                    \"phase\": \"Registration\",\n                    \"phaseStatus\": \"Open\",\n                    \"userId\": null,\n                    \"workRequestId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\"\n                },\n                \"userId\": null\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Retrieve a specific work event",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "workId",
                                                                                "description": "the id of the work object",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da",
                                                                                "values": []
                                                                        },
                                                                        {
                                                                                "name": "eventId",
                                                                                "description": "the id of the event",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "1436465238043-e51c4699-6a8c-48c7-95d1-fd6c50dca93c",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work/{workId}/events/{eventId}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"36b5ae4:14e73b40167:-7ff1\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"id\": \"1436465238043-e51c4699-6a8c-48c7-95d1-fd6c50dca93c\",\n            \"modifiedBy\": null,\n            \"modifiedAt\": \"2015-07-09T11:07:18.043-07:00\",\n            \"createdBy\": \"40097202\",\n            \"createdAt\": null,\n            \"ownerId\": null,\n            \"version\": 1,\n            \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n            \"sourceObjectType\": \"challengedata\",\n            \"eventType\": \"timeline\",\n            \"eventSubType\": \"Registration\",\n            \"sourceObjectContent\": {\n                \"challengeId\": \"30049280\",\n                \"tcDirectId\": \"8646\",\n                \"registrants\": [\n                    {\n                        \"handle\": \"reguser\"\n                    }\n                ],\n                \"submissions\": null,\n                \"phase\": \"Registration\",\n                \"phaseStatus\": \"Open\",\n                \"userId\": null,\n                \"workRequestId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\"\n            },\n            \"userId\": null\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"36b5ae4:14e73b40167:-7ff1\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"id\": \"1436465238043-e51c4699-6a8c-48c7-95d1-fd6c50dca93c\",\n            \"modifiedBy\": null,\n            \"modifiedAt\": \"2015-07-09T11:07:18.043-07:00\",\n            \"createdBy\": \"40097202\",\n            \"createdAt\": null,\n            \"ownerId\": null,\n            \"version\": 1,\n            \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n            \"sourceObjectType\": \"challengedata\",\n            \"eventType\": \"timeline\",\n            \"eventSubType\": \"Registration\",\n            \"sourceObjectContent\": {\n                \"challengeId\": \"30049280\",\n                \"tcDirectId\": \"8646\",\n                \"registrants\": [\n                    {\n                        \"handle\": \"reguser\"\n                    }\n                ],\n                \"submissions\": null,\n                \"phase\": \"Registration\",\n                \"phaseStatus\": \"Open\",\n                \"userId\": null,\n                \"workRequestId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\"\n            },\n            \"userId\": null\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        }
                                ]
                        },
                        {
                                "name": "work files",
                                "description": "",
                                "resources": [
                                        {
                                                "element": "resource",
                                                "name": "Work Requests File Management",
                                                "description": "",
                                                "uriTemplate": "/work-files",
                                                "model": {},
                                                "parameters": [],
                                                "actions": [
                                                        {
                                                                "name": "Create Work Request File Meta Data",
                                                                "description": "",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"fileType\": \"image/jpeg\",\n        \"fileSize\": \"1234K\",\n        \"fileHash\": \"123456\",\n        \"assetType\": \"specs\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"fileType\": \"image/jpeg\",\n        \"fileSize\": \"1234K\",\n        \"fileHash\": \"123456\",\n        \"assetType\": \"specs\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-8000\",\n     \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435212754776-5226aab3-9494-4bee-ac16-beb5e9f51960\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T06:12:34.780Z\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T06:12:34.780Z\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-8000\",\n     \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435212754776-5226aab3-9494-4bee-ac16-beb5e9f51960\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T06:12:34.780Z\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T06:12:34.780Z\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "409",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 409,\n        \"metadata\": null,\n        \"content\": \"fileName already exists\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 409,\n        \"metadata\": null,\n        \"content\": \"fileName already exists\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        },
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Delete Work Request File Meta Data",
                                                                "description": "",
                                                                "method": "DELETE",
                                                                "parameters": [
                                                                        {
                                                                                "name": "fileId",
                                                                                "description": "",
                                                                                "type": "",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "fileId",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files/{fileId}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ff3\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435213745854-c095fd3f-0d8c-471d-b37b-f477ab0497b8\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T06:29:05.861Z\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T06:29:05.861Z\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ff3\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435213745854-c095fd3f-0d8c-471d-b37b-f477ab0497b8\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T06:29:05.861Z\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T06:29:05.861Z\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        },
                                                                                        {
                                                                                                "name": "404",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ff2\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ff2\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get Pre Signed S3 Upload URL",
                                                                "description": "",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files/uploadurl"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7fee\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": null,\n            \"modifiedBy\": null,\n            \"modifiedAt\": null,\n            \"createdBy\": null,\n            \"createdAt\": null,\n            \"workId\": \"12345\",\n            \"ownerId\": null,\n            \"userId\": \"40135374\",\n            \"fileName\": \"test.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/test.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/test.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435216617&Signature=aFjTrsFicz%2FLzzyIqCGOfTKNdCw%3D\",\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7fee\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": null,\n            \"modifiedBy\": null,\n            \"modifiedAt\": null,\n            \"createdBy\": null,\n            \"createdAt\": null,\n            \"workId\": \"12345\",\n            \"ownerId\": null,\n            \"userId\": \"40135374\",\n            \"fileName\": \"test.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/test.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/test.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435216617&Signature=aFjTrsFicz%2FLzzyIqCGOfTKNdCw%3D\",\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "409",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"692638e7:14e29982a88:-7ff9\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 409,\n        \"metadata\": null,\n        \"content\": \"fileName already exists\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"692638e7:14e29982a88:-7ff9\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 409,\n        \"metadata\": null,\n        \"content\": \"fileName already exists\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get Pre Signed S3 Download URL",
                                                                "description": "",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files/downloadurl"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff2\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg,\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff2\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg,\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "404",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff1\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff1\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get File By Id",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "fileId",
                                                                                "description": "",
                                                                                "type": "",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "fileID",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files/{fileId}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7fee\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7fee\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "404",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff1\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff1\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get All Files of Work Request",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "filter",
                                                                                "description": "+ workId - work Id\n",
                                                                                "type": "",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "workId=fieldValue",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files?filter=workId%3D12345"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffc\",\n    \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n        {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        },\n        {\n            \"fileId\": \"1435283562798-bf320a9e-0760-4f77-bce3-00da0a3ad105\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abcdef.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abcdef.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 1\n        }\n    ]\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffc\",\n    \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n        {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        },\n        {\n            \"fileId\": \"1435283562798-bf320a9e-0760-4f77-bce3-00da0a3ad105\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abcdef.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abcdef.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 1\n        }\n    ]\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "404",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffb\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffb\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get All Files of Work Request for a particular assetType",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "filter",
                                                                                "description": "+ workId - work Id\n\n+ assetType - asset type\n",
                                                                                "type": "",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "workId=fieldValue",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files/assets?filter=workId%3D12345%26assetType%3Dspecs"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffc\",\n    \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n        {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        },\n        {\n            \"fileId\": \"1435283562798-bf320a9e-0760-4f77-bce3-00da0a3ad105\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abcdef.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abcdef.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 1\n        }\n    ]\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffc\",\n    \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n        {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        },\n        {\n            \"fileId\": \"1435283562798-bf320a9e-0760-4f77-bce3-00da0a3ad105\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abcdef.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abcdef.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 1\n        }\n    ]\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "404",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffb\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffb\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}    \n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}    \n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        }
                                ]
                        }
                ],
                "content": [
                        {
                                "element": "category",
                                "attributes": {
                                        "name": "work"
                                },
                                "content": [
                                        {
                                                "element": "resource",
                                                "name": "Work Management",
                                                "description": "All requests are constrained to the user making the request unless otherwise noted.\n\nWork objects have the following common fields:\n\n+ `name`: text string used as a label for the object\n\n+ `parentId`: an optional field used to indicate the parent work object's id\n\n+ `modelType`: specifies the type of work object (currently only \"app-project\")\n\n**App Project**\n\nAn app project is a type of work object that is used to manage work to be done by the\ncommunity in order to build an application. \nAn app project contains the following app project-specific fields:\n\n+ `summary`: text summary of the project\n\n+ `requestType`: what type of work is being requested\n\n+ `competitorApps`: an array of strings representing names of competitor apps that should be used as a reference\n\n+ `usageDescription`: an description of how the app will be used\n\n+ `features`: an object that has the following attributes\n    + `name`: the name of the feature\n    + `description`: a description of the feature\n    + `explanation`: an explanation of the feature\n    + `custom`: whether this is a custom feature or not\n\n+ `status`: indicates the overall status of the project\n\n+ `statusNotes`: can be used to provide more detail about the current status\n\n+ `copilotId`: the user id of the co-pilot assigned to the project\n\n+ `quotedAmount`: a string representing the price of the project\n\n+ `price`: a decimal representing the price of the project\n\n+ `priceCurrency`: the ISO 4217 currency code for the price of the project\n\n+ `tcDirectId`: the id of the topcoder Direct project id that corresponds to the project\n\n",
                                                "uriTemplate": "/work",
                                                "model": {},
                                                "parameters": [],
                                                "actions": [
                                                        {
                                                                "name": "Create Work",
                                                                "description": "Creates a new work object. The type of work object is specified with the `modelType` field.\n\n",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    {\n        \"competitorApps\" : [ \"comp 1\", \"comp 2\", \"comp 3\" ],\n        \"usageDescription\" : \"usage2222\",\n        \"features\" : [ {\n                \"name\" : \"feature1\",\n                \"description\" : \"desc1\"\n            }, {\n                \"name\" : \"feature2\",\n                \"description\" : \"desc2\"\n        } ],\n        \"modelType\": \"app-project\",\n        \"name\" : \"new project001\",\n        \"summary\" : \"test summary\",\n        \"requestType\":\"Design&Code\",\n        \"status\": \"Assigned\",\n        \"statusNotes\": \"noted\",\n        \"copilotId\": \"12345\",\n        \"tcDirectId\": \"23456\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    {\n        \"competitorApps\" : [ \"comp 1\", \"comp 2\", \"comp 3\" ],\n        \"usageDescription\" : \"usage2222\",\n        \"features\" : [ {\n                \"name\" : \"feature1\",\n                \"description\" : \"desc1\"\n            }, {\n                \"name\" : \"feature2\",\n                \"description\" : \"desc2\"\n        } ],\n        \"modelType\": \"app-project\",\n        \"name\" : \"new project001\",\n        \"summary\" : \"test summary\",\n        \"requestType\":\"Design&Code\",\n        \"status\": \"Assigned\",\n        \"statusNotes\": \"noted\",\n        \"copilotId\": \"12345\",\n        \"tcDirectId\": \"23456\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45de\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45de\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Update Work",
                                                                "description": "Updates an existing work object. The requester must be the owner of the work object.\n\n",
                                                                "method": "PUT",
                                                                "parameters": [
                                                                        {
                                                                                "name": "workId",
                                                                                "description": "the id of the work object",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work/{workId}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    {\n        \"competitorApps\" : [ \"comp 1\", \"comp 2\", \"comp 3\" ],\n        \"usageDescription\" : \"usage2222\",\n        \"features\" : [ {\n                \"name\" : \"feature1\",\n                \"description\" : \"desc1\"\n            }, {\n                \"name\" : \"feature2\",\n                \"description\" : \"desc2\"\n        } ],\n        \"name\" : \"new project001\",\n        \"summary\" : \"test summary\",\n        \"requestType\":\"Design&Code\",\n        \"status\": \"Assigned\",\n        \"statusNotes\": \"noted\",\n        \"copilotId\": \"12345\",\n        \"tcDirectId\": \"23456\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    {\n        \"competitorApps\" : [ \"comp 1\", \"comp 2\", \"comp 3\" ],\n        \"usageDescription\" : \"usage2222\",\n        \"features\" : [ {\n                \"name\" : \"feature1\",\n                \"description\" : \"desc1\"\n            }, {\n                \"name\" : \"feature2\",\n                \"description\" : \"desc2\"\n        } ],\n        \"name\" : \"new project001\",\n        \"summary\" : \"test summary\",\n        \"requestType\":\"Design&Code\",\n        \"status\": \"Assigned\",\n        \"statusNotes\": \"noted\",\n        \"copilotId\": \"12345\",\n        \"tcDirectId\": \"23456\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45dc\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45dc\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get Work",
                                                                "description": "Retrieves a specific work object\n\n",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "workId",
                                                                                "description": "the id of the work object",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work/{workId}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d6\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n            \"modifiedBy\": \"40097202\",\n            \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n            \"createdBy\": \"40097202\",\n            \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n            \"name\": \"new project001\",\n            \"summary\": \"test summary\\ntesting1234\",\n            \"requestType\": \"Design\",\n            \"ownerId\": \"40097202\",\n            \"version\": 2,\n            \"competitorApps\": [\n                \"comp 1\",\n                \"comp 2\",\n                \"comp 3\"\n            ],\n            \"usageDescription\": \"usage2222\",\n            \"features\": [\n                {\n                    \"name\": \"feature1\",\n                    \"description\": \"desc1\",\n                    \"explanation\": null,\n                    \"custom\": null\n                },\n                {\n                    \"name\": \"feature2\",\n                    \"description\": \"desc2\",\n                    \"explanation\": null,\n                    \"custom\": null\n                }\n            ],\n            \"status\": \"Created\",\n            \"statusNotes\": null,\n            \"copilotId\": \"unassigned\",\n            \"quotedAmount\": null,\n            \"tcDirectId\": null,\n            \"price\": 0,\n            \"priceCurrency\": null,\n            \"parentId\": \"none\"\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d6\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n            \"modifiedBy\": \"40097202\",\n            \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n            \"createdBy\": \"40097202\",\n            \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n            \"name\": \"new project001\",\n            \"summary\": \"test summary\\ntesting1234\",\n            \"requestType\": \"Design\",\n            \"ownerId\": \"40097202\",\n            \"version\": 2,\n            \"competitorApps\": [\n                \"comp 1\",\n                \"comp 2\",\n                \"comp 3\"\n            ],\n            \"usageDescription\": \"usage2222\",\n            \"features\": [\n                {\n                    \"name\": \"feature1\",\n                    \"description\": \"desc1\",\n                    \"explanation\": null,\n                    \"custom\": null\n                },\n                {\n                    \"name\": \"feature2\",\n                    \"description\": \"desc2\",\n                    \"explanation\": null,\n                    \"custom\": null\n                }\n            ],\n            \"status\": \"Created\",\n            \"statusNotes\": null,\n            \"copilotId\": \"unassigned\",\n            \"quotedAmount\": null,\n            \"tcDirectId\": null,\n            \"price\": 0,\n            \"priceCurrency\": null,\n            \"parentId\": \"none\"\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get All Work",
                                                                "description": "Retrieves all work objects owned by the user.\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d5\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-03-27T14:48:22.613Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-03-27T14:48:22.613Z\",\n                \"name\": \"testname\",\n                \"summary\": \"test summary\\ntesting\",\n                \"requestType\": null,\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"costEstimate\": null,\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": null,\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            },\n            {\n                \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n                \"name\": \"new project001\",\n                \"summary\": \"test summary\\ntesting1234\",\n                \"requestType\": \"Design\",\n                \"ownerId\": \"40097202\",\n                \"version\": 2,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": \"unassigned\",\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\"\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d5\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-03-27T14:48:22.613Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-03-27T14:48:22.613Z\",\n                \"name\": \"testname\",\n                \"summary\": \"test summary\\ntesting\",\n                \"requestType\": null,\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"costEstimate\": null,\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": null,\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            },\n            {\n                \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n                \"name\": \"new project001\",\n                \"summary\": \"test summary\\ntesting1234\",\n                \"requestType\": \"Design\",\n                \"ownerId\": \"40097202\",\n                \"version\": 2,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": \"unassigned\",\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\"\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Query Work",
                                                                "description": "Queries for work objects. NOTE: the `filter` parameter value must be URL encoded since it\nis a URL parameter.\n\nSome useful queries:\n\n+ Find all root app-projects (modelType = app-project AND parentId = \"none\"): `modelType%3Dapp-project%26parentId%3Dnone` \n\n    *note the value `none` is used to indicate no parent*\n\n+ Find all children of a given object (parentId = \\<id\\>): `parentId%3D1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56`\n\n",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "filterParam",
                                                                                "description": "query filter",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "modelType%3Dapp-project%26parentId%3Dnone",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work?filter={filterParam}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d5\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-03-27T14:48:22.613Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-03-27T14:48:22.613Z\",\n                \"name\": \"testname\",\n                \"summary\": \"test summary\\ntesting\",\n                \"requestType\": null,\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"costEstimate\": null,\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": null,\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            },\n            {\n                \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n                \"name\": \"new project001\",\n                \"summary\": \"test summary\\ntesting1234\",\n                \"requestType\": \"Design\",\n                \"ownerId\": \"40097202\",\n                \"version\": 2,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": \"unassigned\",\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"335b1bb4:14e3056cbf7:-45d5\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1427467702614:c6c56d74-b6c4-427d-88a3-47bf8dd9fe56\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-03-27T14:48:22.613Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-03-27T14:48:22.613Z\",\n                \"name\": \"testname\",\n                \"summary\": \"test summary\\ntesting\",\n                \"requestType\": null,\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"costEstimate\": null,\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": null,\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            },\n            {\n                \"id\": \"1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-06-30T15:32:44.290Z\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-06-30T15:25:08.878Z\",\n                \"name\": \"new project001\",\n                \"summary\": \"test summary\\ntesting1234\",\n                \"requestType\": \"Design\",\n                \"ownerId\": \"40097202\",\n                \"version\": 2,\n                \"competitorApps\": [\n                    \"comp 1\",\n                    \"comp 2\",\n                    \"comp 3\"\n                ],\n                \"usageDescription\": \"usage2222\",\n                \"features\": [\n                    {\n                        \"name\": \"feature1\",\n                        \"description\": \"desc1\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    },\n                    {\n                        \"name\": \"feature2\",\n                        \"description\": \"desc2\",\n                        \"explanation\": null,\n                        \"custom\": null\n                    }\n                ],\n                \"status\": null,\n                \"statusNotes\": null,\n                \"copilotId\": \"unassigned\",\n                \"quotedAmount\": null,\n                \"tcDirectId\": null,\n                \"price\": 0,\n                \"priceCurrency\": null,\n                \"parentId\": \"none\"\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Retrieve work events",
                                                                "description": "Retrieves an event timeline for a work object. \nCurrently events are generated only for `app-project` work objects.\n\nA work event has the following attributes:\n\n+ `workId`: Id of the work object the events are associated with\n\n+ `eventType`: Currently the only type is `timeline`\n\n+ `eventSubType`: a sub-categorization of the type of event.\n\n+ `sourceObjectType`: the type of object contained in the `sourceObjectContent` attribute. The current types are `app-project` and `challengedata`\n\n+ `sourceObjectContent`: the object is an `app-project` or `challengedata`\n\n\n**challengedata**\n\nA challengedata object contains information about a challenge state transition. It\nhas the following attributes:\n\n+ `challengeId`: Id of the topcoder challenge\n\n+ `tcDirectId`: Id of the topcoder Direct project associated with the challenge\n\n+ `phase`: The phase that the challenge is transitioning **from**. Current values are `Registration` and `Submission`\n\n+ `registrants`: An array of objects with a `handle` attribute. The handle is the topcoder user handle\n\n+ `submissions`: An array of objects with a `submissionId` attribute. The submissionId is the id of the topcoder submission\n\n\n",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "workId",
                                                                                "description": "the id of the work object",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work/{workId}/events"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"36b5ae4:14e73b40167:-7ff2\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1436460345901-e39b039d-d3e0-450d-8c89-ff0d3a5fdf50\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-07-09T09:45:45.901-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-07-09T09:45:45.901-07:00\",\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"app-project\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"created\",\n                \"sourceObjectContent\": {\n                    \"id\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                    \"modifiedBy\": \"40097202\",\n                    \"modifiedAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"createdBy\": \"40097202\",\n                    \"createdAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"ownerId\": \"40097202\",\n                    \"version\": 1,\n                    \"name\": \"event test\",\n                    \"parentId\": \"none\",\n                    \"summary\": null,\n                    \"requestType\": null,\n                    \"competitorApps\": null,\n                    \"usageDescription\": null,\n                    \"features\": null,\n                    \"costEstimate\": null,\n                    \"status\": null,\n                    \"statusNotes\": null,\n                    \"copilotId\": \"test-copilot-id\",\n                    \"quotedAmount\": null,\n                    \"tcDirectId\": null,\n                    \"price\": 0,\n                    \"priceCurrency\": null,\n                    \"modelType\": \"app-project\"\n                },\n                \"userId\": null\n            },\n            {\n                \"id\": \"1436460443827-65e55dfe-4bf7-4df3-9e82-1b3c48ecee2f\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-07-09T09:47:23.827-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-07-09T09:47:23.827-07:00\",\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"app-project\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"copilot-assigned\",\n                \"sourceObjectContent\": {\n                    \"id\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                    \"modifiedBy\": \"40097202\",\n                    \"modifiedAt\": \"2015-07-09T16:47:23.709Z\",\n                    \"createdBy\": \"40097202\",\n                    \"createdAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"ownerId\": \"40097202\",\n                    \"version\": 3,\n                    \"name\": \"event test\",\n                    \"parentId\": \"none\",\n                    \"summary\": null,\n                    \"requestType\": null,\n                    \"competitorApps\": null,\n                    \"usageDescription\": null,\n                    \"features\": null,\n                    \"costEstimate\": null,\n                    \"status\": null,\n                    \"statusNotes\": null,\n                    \"copilotId\": \"new-copilot-id\",\n                    \"quotedAmount\": null,\n                    \"tcDirectId\": null,\n                    \"price\": 0,\n                    \"priceCurrency\": null,\n                    \"modelType\": \"app-project\"\n                },\n                \"userId\": null\n            },\n            {\n                \"id\": \"1436465238043-e51c4699-6a8c-48c7-95d1-fd6c50dca93c\",\n                \"modifiedBy\": null,\n                \"modifiedAt\": \"2015-07-09T11:07:18.043-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": null,\n                \"ownerId\": null,\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"challengedata\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"Registration\",\n                \"sourceObjectContent\": {\n                    \"challengeId\": \"30049280\",\n                    \"tcDirectId\": \"8646\",\n                    \"registrants\": [\n                        {\n                            \"handle\": \"reguser\"\n                        }\n                    ],\n                    \"submissions\": null,\n                    \"phase\": \"Registration\",\n                    \"phaseStatus\": \"Open\",\n                    \"userId\": null,\n                    \"workRequestId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\"\n                },\n                \"userId\": null\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"36b5ae4:14e73b40167:-7ff2\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": [\n            {\n                \"id\": \"1436460345901-e39b039d-d3e0-450d-8c89-ff0d3a5fdf50\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-07-09T09:45:45.901-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-07-09T09:45:45.901-07:00\",\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"app-project\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"created\",\n                \"sourceObjectContent\": {\n                    \"id\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                    \"modifiedBy\": \"40097202\",\n                    \"modifiedAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"createdBy\": \"40097202\",\n                    \"createdAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"ownerId\": \"40097202\",\n                    \"version\": 1,\n                    \"name\": \"event test\",\n                    \"parentId\": \"none\",\n                    \"summary\": null,\n                    \"requestType\": null,\n                    \"competitorApps\": null,\n                    \"usageDescription\": null,\n                    \"features\": null,\n                    \"costEstimate\": null,\n                    \"status\": null,\n                    \"statusNotes\": null,\n                    \"copilotId\": \"test-copilot-id\",\n                    \"quotedAmount\": null,\n                    \"tcDirectId\": null,\n                    \"price\": 0,\n                    \"priceCurrency\": null,\n                    \"modelType\": \"app-project\"\n                },\n                \"userId\": null\n            },\n            {\n                \"id\": \"1436460443827-65e55dfe-4bf7-4df3-9e82-1b3c48ecee2f\",\n                \"modifiedBy\": \"40097202\",\n                \"modifiedAt\": \"2015-07-09T09:47:23.827-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": \"2015-07-09T09:47:23.827-07:00\",\n                \"ownerId\": \"40097202\",\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"app-project\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"copilot-assigned\",\n                \"sourceObjectContent\": {\n                    \"id\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                    \"modifiedBy\": \"40097202\",\n                    \"modifiedAt\": \"2015-07-09T16:47:23.709Z\",\n                    \"createdBy\": \"40097202\",\n                    \"createdAt\": \"2015-07-09T16:45:45.790Z\",\n                    \"ownerId\": \"40097202\",\n                    \"version\": 3,\n                    \"name\": \"event test\",\n                    \"parentId\": \"none\",\n                    \"summary\": null,\n                    \"requestType\": null,\n                    \"competitorApps\": null,\n                    \"usageDescription\": null,\n                    \"features\": null,\n                    \"costEstimate\": null,\n                    \"status\": null,\n                    \"statusNotes\": null,\n                    \"copilotId\": \"new-copilot-id\",\n                    \"quotedAmount\": null,\n                    \"tcDirectId\": null,\n                    \"price\": 0,\n                    \"priceCurrency\": null,\n                    \"modelType\": \"app-project\"\n                },\n                \"userId\": null\n            },\n            {\n                \"id\": \"1436465238043-e51c4699-6a8c-48c7-95d1-fd6c50dca93c\",\n                \"modifiedBy\": null,\n                \"modifiedAt\": \"2015-07-09T11:07:18.043-07:00\",\n                \"createdBy\": \"40097202\",\n                \"createdAt\": null,\n                \"ownerId\": null,\n                \"version\": 1,\n                \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n                \"sourceObjectType\": \"challengedata\",\n                \"eventType\": \"timeline\",\n                \"eventSubType\": \"Registration\",\n                \"sourceObjectContent\": {\n                    \"challengeId\": \"30049280\",\n                    \"tcDirectId\": \"8646\",\n                    \"registrants\": [\n                        {\n                            \"handle\": \"reguser\"\n                        }\n                    ],\n                    \"submissions\": null,\n                    \"phase\": \"Registration\",\n                    \"phaseStatus\": \"Open\",\n                    \"userId\": null,\n                    \"workRequestId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\"\n                },\n                \"userId\": null\n            }\n        ]\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Retrieve a specific work event",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "workId",
                                                                                "description": "the id of the work object",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "1435677908878-f5e91b34-9ea1-407d-b882-0022ea2de0da",
                                                                                "values": []
                                                                        },
                                                                        {
                                                                                "name": "eventId",
                                                                                "description": "the id of the event",
                                                                                "type": "string",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "1436465238043-e51c4699-6a8c-48c7-95d1-fd6c50dca93c",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work/{workId}/events/{eventId}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"36b5ae4:14e73b40167:-7ff1\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"id\": \"1436465238043-e51c4699-6a8c-48c7-95d1-fd6c50dca93c\",\n            \"modifiedBy\": null,\n            \"modifiedAt\": \"2015-07-09T11:07:18.043-07:00\",\n            \"createdBy\": \"40097202\",\n            \"createdAt\": null,\n            \"ownerId\": null,\n            \"version\": 1,\n            \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n            \"sourceObjectType\": \"challengedata\",\n            \"eventType\": \"timeline\",\n            \"eventSubType\": \"Registration\",\n            \"sourceObjectContent\": {\n                \"challengeId\": \"30049280\",\n                \"tcDirectId\": \"8646\",\n                \"registrants\": [\n                    {\n                        \"handle\": \"reguser\"\n                    }\n                ],\n                \"submissions\": null,\n                \"phase\": \"Registration\",\n                \"phaseStatus\": \"Open\",\n                \"userId\": null,\n                \"workRequestId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\"\n            },\n            \"userId\": null\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"36b5ae4:14e73b40167:-7ff1\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"id\": \"1436465238043-e51c4699-6a8c-48c7-95d1-fd6c50dca93c\",\n            \"modifiedBy\": null,\n            \"modifiedAt\": \"2015-07-09T11:07:18.043-07:00\",\n            \"createdBy\": \"40097202\",\n            \"createdAt\": null,\n            \"ownerId\": null,\n            \"version\": 1,\n            \"workId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\",\n            \"sourceObjectType\": \"challengedata\",\n            \"eventType\": \"timeline\",\n            \"eventSubType\": \"Registration\",\n            \"sourceObjectContent\": {\n                \"challengeId\": \"30049280\",\n                \"tcDirectId\": \"8646\",\n                \"registrants\": [\n                    {\n                        \"handle\": \"reguser\"\n                    }\n                ],\n                \"submissions\": null,\n                \"phase\": \"Registration\",\n                \"phaseStatus\": \"Open\",\n                \"userId\": null,\n                \"workRequestId\": \"1436460345790-a58ebe97-4a26-4a6c-8fa7-e35dc2b32d9c\"\n            },\n            \"userId\": null\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        }
                                ]
                        },
                        {
                                "element": "category",
                                "attributes": {
                                        "name": "work files"
                                },
                                "content": [
                                        {
                                                "element": "resource",
                                                "name": "Work Requests File Management",
                                                "description": "",
                                                "uriTemplate": "/work-files",
                                                "model": {},
                                                "parameters": [],
                                                "actions": [
                                                        {
                                                                "name": "Create Work Request File Meta Data",
                                                                "description": "",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"fileType\": \"image/jpeg\",\n        \"fileSize\": \"1234K\",\n        \"fileHash\": \"123456\",\n        \"assetType\": \"specs\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"fileType\": \"image/jpeg\",\n        \"fileSize\": \"1234K\",\n        \"fileHash\": \"123456\",\n        \"assetType\": \"specs\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-8000\",\n     \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435212754776-5226aab3-9494-4bee-ac16-beb5e9f51960\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T06:12:34.780Z\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T06:12:34.780Z\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-8000\",\n     \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435212754776-5226aab3-9494-4bee-ac16-beb5e9f51960\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T06:12:34.780Z\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T06:12:34.780Z\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "409",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 409,\n        \"metadata\": null,\n        \"content\": \"fileName already exists\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 409,\n        \"metadata\": null,\n        \"content\": \"fileName already exists\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        },
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Delete Work Request File Meta Data",
                                                                "description": "",
                                                                "method": "DELETE",
                                                                "parameters": [
                                                                        {
                                                                                "name": "fileId",
                                                                                "description": "",
                                                                                "type": "",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "fileId",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files/{fileId}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ff3\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435213745854-c095fd3f-0d8c-471d-b37b-f477ab0497b8\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T06:29:05.861Z\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T06:29:05.861Z\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ff3\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435213745854-c095fd3f-0d8c-471d-b37b-f477ab0497b8\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T06:29:05.861Z\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T06:29:05.861Z\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        },
                                                                                        {
                                                                                                "name": "404",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ff2\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ff2\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get Pre Signed S3 Upload URL",
                                                                "description": "",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files/uploadurl"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7fee\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": null,\n            \"modifiedBy\": null,\n            \"modifiedAt\": null,\n            \"createdBy\": null,\n            \"createdAt\": null,\n            \"workId\": \"12345\",\n            \"ownerId\": null,\n            \"userId\": \"40135374\",\n            \"fileName\": \"test.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/test.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/test.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435216617&Signature=aFjTrsFicz%2FLzzyIqCGOfTKNdCw%3D\",\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7fee\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": null,\n            \"modifiedBy\": null,\n            \"modifiedAt\": null,\n            \"createdBy\": null,\n            \"createdAt\": null,\n            \"workId\": \"12345\",\n            \"ownerId\": null,\n            \"userId\": \"40135374\",\n            \"fileName\": \"test.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/test.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/test.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435216617&Signature=aFjTrsFicz%2FLzzyIqCGOfTKNdCw%3D\",\n            \"preSignedUrlDownload\": null,\n            \"version\": 0\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "409",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"692638e7:14e29982a88:-7ff9\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 409,\n        \"metadata\": null,\n        \"content\": \"fileName already exists\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"692638e7:14e29982a88:-7ff9\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 409,\n        \"metadata\": null,\n        \"content\": \"fileName already exists\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"workId\": \"12345\",\n        \"fileName\": \"abc.jpg\",\n        \"assetType\": \"specs\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get Pre Signed S3 Download URL",
                                                                "description": "",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files/downloadurl"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff2\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg,\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff2\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg,\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "404",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff1\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff1\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"param\": {\n        \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\"\n    }\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get File By Id",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "fileId",
                                                                                "description": "",
                                                                                "type": "",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "fileID",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files/{fileId}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7fee\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7fee\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": \"image/jpeg\",\n            \"fileSize\": \"1234K\",\n            \"fileHash\": \"123456\",\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "404",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff1\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-30e9a8ee:14e2c01ad96:-7ff1\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get All Files of Work Request",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "filter",
                                                                                "description": "+ workId - work Id\n",
                                                                                "type": "",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "workId=fieldValue",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files?filter=workId%3D12345"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffc\",\n    \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n        {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        },\n        {\n            \"fileId\": \"1435283562798-bf320a9e-0760-4f77-bce3-00da0a3ad105\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abcdef.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abcdef.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 1\n        }\n    ]\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffc\",\n    \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n        {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        },\n        {\n            \"fileId\": \"1435283562798-bf320a9e-0760-4f77-bce3-00da0a3ad105\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abcdef.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abcdef.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 1\n        }\n    ]\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "404",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffb\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffb\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get All Files of Work Request for a particular assetType",
                                                                "description": "",
                                                                "method": "GET",
                                                                "parameters": [
                                                                        {
                                                                                "name": "filter",
                                                                                "description": "+ workId - work Id\n\n+ assetType - asset type\n",
                                                                                "type": "",
                                                                                "required": true,
                                                                                "default": "",
                                                                                "example": "workId=fieldValue",
                                                                                "values": []
                                                                        }
                                                                ],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/work-files/assets?filter=workId%3D12345%26assetType%3Dspecs"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffc\",\n    \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n        {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        },\n        {\n            \"fileId\": \"1435283562798-bf320a9e-0760-4f77-bce3-00da0a3ad105\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abcdef.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abcdef.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 1\n        }\n    ]\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffc\",\n    \"result\": {\n    \"success\": true,\n    \"status\": 200,\n    \"metadata\": null,\n    \"content\": [\n        {\n            \"fileId\": \"1435258831650-8113fb24-5004-4ef4-85ae-f69bdec14a6c\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T16:37:23.954-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T12:00:31.651-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abc.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abc.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": \"https://topcoder-dev-media.s3.amazonaws.com/Design/40135374/12345/specs/abc.jpg?AWSAccessKeyId=AKIAIXSUWK5FC3PKNXFA&Expires=1435276343&Signature=KgWS9%2Fr1B2gDDfPqkQ2x9iPMmLo%3D\",\n            \"version\": 2\n        },\n        {\n            \"fileId\": \"1435283562798-bf320a9e-0760-4f77-bce3-00da0a3ad105\",\n            \"modifiedBy\": \"40135374\",\n            \"modifiedAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"createdBy\": \"40135374\",\n            \"createdAt\": \"2015-06-25T18:52:42.799-07:00\",\n            \"workId\": \"12345\",\n            \"ownerId\": \"40135374\",\n            \"userId\": \"40135374\",\n            \"fileName\": \"abcdef.jpg\",\n            \"filePath\": \"Design/40135374/12345/specs/abcdef.jpg\",\n            \"fileType\": null,\n            \"fileSize\": null,\n            \"fileHash\": null,\n            \"assetType\": \"specs\",\n            \"preSignedUrlUpload\": null,\n            \"preSignedUrlDownload\": null,\n            \"version\": 1\n        }\n    ]\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "404",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffb\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-7a3ea750:14e2d904b4d:-7ffb\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 404,\n        \"metadata\": null,\n        \"content\": null\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        },
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/x-www-form-urlencoded"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "500",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}    \n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"44912af3:14e2958afa0:-7ffa\",\n    \"result\": {\n        \"success\": false,\n        \"status\": 500,\n        \"metadata\": null,\n        \"content\": \"ExceptionMessage\"\n    },\n    \"version\": \"v3\"\n}    \n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        }
                                ]
                        }
                ]
        },
        "warnings": [],
        "sourcemap": null
},
    "apiary/messaging14.json": {
        "ast": {
                "_version": "3.0",
                "metadata": [
                        {
                                "name": "FORMAT",
                                "value": "1A"
                        },
                        {
                                "name": "HOST",
                                "value": "https://api.topcoder.com/v3/"
                        }
                ],
                "name": "Messaging (Draft)",
                "description": "Messaging offers API's to access or post private and public messages, amongst users in ASP. Messaging follows the v3 API spec defined in [here](https://docs.google.com/presentation/d/15pucEI0MHj9y778EyaAWGh4MBH-I73i1-GS0ir7FhxE/edit#slide=id.g29c3ffcc3_053)\n\nOther than the standard crud operations, if to retrieve all the notifications for a particular user, use filtering options in the v3 API spec, for example\n\n",
                "element": "category",
                "resourceGroups": [
                        {
                                "name": "",
                                "description": "",
                                "resources": [
                                        {
                                                "element": "resource",
                                                "name": "Threads",
                                                "description": "Authroization header has to be provided along with this request to identify the user. A thread object has the following attributes\n\n+ threadId - unique identifier for the thread storing messages.  This identifier will be generated by the messaging service to identify a unique thread.\n\n+ clientIdentifier - a unique identifier coming from the consumer of the Messaging Service.  The combination of clientIdentifier and the list of Publishers make up the unique key that identifies a ThreadId\n\n+ context - context refers to a string identifier on which this message is being posted, if the message is posted as a generic one on the project then it has a context of 'work'\n\n+ subject - This is the subject for a threaded message.  Typically this will be the Project Title in our use case.\n\n+ publishers - list of user identifiers who have the ability to publish to this thread.  This will be the numeric id for a user\n\n+ subscribers - list of the user identifiers who have the ability to read from a thread.  This will be the numeric id for a user\n\n",
                                                "uriTemplate": "/threads",
                                                "model": {},
                                                "parameters": [],
                                                "actions": [
                                                        {
                                                                "name": "Create a new Thread",
                                                                "description": "Create a Threaded conversation between multiple publishers\n\n",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"clientIdentifier\":\"guid-or-identifier-for-work-object\",\n    \"context\":\"work\",\n    \"subject\",:\"subject-title\",\n    \"publishers\": [\n        \"jsymons\"\n    ],\n    \"subscribers\": [\n        \"jsymons\"\n    ]\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"clientIdentifier\":\"guid-or-identifier-for-work-object\",\n    \"context\":\"work\",\n    \"subject\",:\"subject-title\",\n    \"publishers\": [\n        \"jsymons\"\n    ],\n    \"subscribers\": [\n        \"jsymons\"\n    ]\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "201",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        },
                                                                                                        {
                                                                                                                "name": "Location",
                                                                                                                "value": "/threads/1"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "    {\n        \"id\":\"-455f1770:14d6dd97f63:-7f9c\",\n        \"result\": {\n            \"success\":true,\n            \"status\":200,\n            \"metadata\":null,\n            \"content\":{ \n                \"id\": \"guid-or-identifier-for-thread-object\" \n            }  \n        },\n        \"version\":\"v3\"\n    }\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "    {\n        \"id\":\"-455f1770:14d6dd97f63:-7f9c\",\n        \"result\": {\n            \"success\":true,\n            \"status\":200,\n            \"metadata\":null,\n            \"content\":{ \n                \"id\": \"guid-or-identifier-for-thread-object\" \n            }  \n        },\n        \"version\":\"v3\"\n    }\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get a Thread",
                                                                "description": "Get a Thread and all underlying Messages associated to that Thread for a given subscriber\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/threads/{thread_id}?subscriberId=subscriberId"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\":\"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\":true,\n        \"status\":200,\n        \"metadata\":null,\n        \"content\":{\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\",:\"subject-title\",\n            \"unreadCount\": 1,\n            \"messages\": [\n                {\n                    \"id\":\"guid-or-identifier-for-message-object\",\n                    \"threadId\": \"guid-or-identifier-for-thread-object\",\n                    \"body\":\"Hello World\",\n                    \"createdAt\":\"2015-11-05T08:15:30-05:00\",\n                    \"publisherId\":\"sselvadurai\",\n                    \"read\": true,\n                    \"attachments\": [\n                        {\n                          \"attachmentId\":\"guid-or-identifier-for-attachment\",\n                          \"name\":\"name-of-attachment\",\n                          \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment.png\",\n                          \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment.png\"\n                        },\n                        {\n                          \"attachmentId\":\"guid-or-identifier-for-attachment01\",\n                          \"name\":\"name-of-attachment01\",\n                          \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment01.png\",\n                          \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment01.png\"\n                        }\n                    ]\n                }\n            ]\n        }\n    },\n    \"version\":\"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\":\"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\":true,\n        \"status\":200,\n        \"metadata\":null,\n        \"content\":{\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\",:\"subject-title\",\n            \"unreadCount\": 1,\n            \"messages\": [\n                {\n                    \"id\":\"guid-or-identifier-for-message-object\",\n                    \"threadId\": \"guid-or-identifier-for-thread-object\",\n                    \"body\":\"Hello World\",\n                    \"createdAt\":\"2015-11-05T08:15:30-05:00\",\n                    \"publisherId\":\"sselvadurai\",\n                    \"read\": true,\n                    \"attachments\": [\n                        {\n                          \"attachmentId\":\"guid-or-identifier-for-attachment\",\n                          \"name\":\"name-of-attachment\",\n                          \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment.png\",\n                          \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment.png\"\n                        },\n                        {\n                          \"attachmentId\":\"guid-or-identifier-for-attachment01\",\n                          \"name\":\"name-of-attachment01\",\n                          \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment01.png\",\n                          \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment01.png\"\n                        }\n                    ]\n                }\n            ]\n        }\n    },\n    \"version\":\"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get all Threads for a User",
                                                                "description": "Get all of the threads for a given subscriber\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/threads?subscriberId=subscriberId"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\":\"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\":true,\n        \"status\":200,\n        \"metadata\":null,\n        \"content\": {\n            \"totalUnreadCount\": 1,\n            \"threads\": [\n                {\n                    \"id\": \"guid-or-identifier-for-thread-object\",\n                    \"subject\",:\"subject-title\",\n                    \"unreadCount\": 1,\n                    \"messages\": [\n                        {\n                            \"id\":\"guid-or-identifier-for-message-object\",\n                            \"threadId\": \"guid-or-identifier-for-thread-object\",\n                            \"body\":\"Hello World\",\n                            \"createdAt\":\"2015-11-05T08:15:30-05:00\",\n                            \"publisherId\":\"sselvadurai\",\n                            \"read\": true,\n                            \"attachments\": [\n                                {\n                                  \"attachmentId\":\"guid-or-identifier-for-attachment\",\n                                  \"name\":\"name-of-attachment\",\n                                  \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment.png\",\n                                  \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment.png\"\n                                },\n                                {\n                                  \"attachmentId\":\"guid-or-identifier-for-attachment01\",\n                                  \"name\":\"name-of-attachment01\",\n                                  \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment01.png\",\n                                  \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment01.png\"\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    },\n    \"version\":\"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\":\"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\":true,\n        \"status\":200,\n        \"metadata\":null,\n        \"content\": {\n            \"totalUnreadCount\": 1,\n            \"threads\": [\n                {\n                    \"id\": \"guid-or-identifier-for-thread-object\",\n                    \"subject\",:\"subject-title\",\n                    \"unreadCount\": 1,\n                    \"messages\": [\n                        {\n                            \"id\":\"guid-or-identifier-for-message-object\",\n                            \"threadId\": \"guid-or-identifier-for-thread-object\",\n                            \"body\":\"Hello World\",\n                            \"createdAt\":\"2015-11-05T08:15:30-05:00\",\n                            \"publisherId\":\"sselvadurai\",\n                            \"read\": true,\n                            \"attachments\": [\n                                {\n                                  \"attachmentId\":\"guid-or-identifier-for-attachment\",\n                                  \"name\":\"name-of-attachment\",\n                                  \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment.png\",\n                                  \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment.png\"\n                                },\n                                {\n                                  \"attachmentId\":\"guid-or-identifier-for-attachment01\",\n                                  \"name\":\"name-of-attachment01\",\n                                  \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment01.png\",\n                                  \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment01.png\"\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    },\n    \"version\":\"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        },
                                        {
                                                "element": "resource",
                                                "name": "Messages",
                                                "description": "Authroization header has to be provided along with this request to identify the user. A message object has the following attributes\n\n+ threadId - unique identifier for the thread storing messages.  This identifier will be generated by the messaging service to identify a unique thread.\n\n+ body - plain text body of the message \n\n+ read - marks a message as 'read' given the subscriberId that was passed into the query\n\n+ context - context refers to a string identifier on which this message is being posted, if the message is posted as a generic one on the project then it has a context of 'work'\n\n+ publisherId - the id of the user that is publishing the message.  This value is checked to ensure the user has the ability to post a message to a given thread\n\n+ subscriberId - the id of the user that is currently viewing the messages.  This user is checked to ensure the user has the ability to read from the given thread\n\n+ attachments - list of attachment objects associated with the message\n\n",
                                                "uriTemplate": "/messages",
                                                "model": {},
                                                "parameters": [],
                                                "actions": [
                                                        {
                                                                "name": "Retrieve the messages",
                                                                "description": "These are the optional parameters, if none is provided, we would return all messages across all the projects, ordered by createAt date desc, i.e. recent 10 messages\n\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/messages/{id}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\":\"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\":true,\n        \"status\":200,\n        \"metadata\":null,\n        \"content\":[\n            {\n                \"id\":\"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\":\"Hello World\",\n                \"createdAt\":\"2015-11-05T08:15:30-05:00\",\n                \"publisherId\":\"sselvadurai\",\n                \"read\": true,\n                \"attachments\": [\n                    {\n                      \"attachmentId\":\"guid-or-identifier-for-attachment\",\n                      \"name\":\"name-of-attachment\",\n                      \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment.png\",\n                      \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment.png\"\n                    },\n                    {\n                      \"attachmentId\":\"guid-or-identifier-for-attachment01\",\n                      \"name\":\"name-of-attachment01\",\n                      \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment01.png\",\n                      \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment01.png\"\n                    }\n                ]\n            }\n        ],\n    },\n    \"version\":\"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\":\"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\":true,\n        \"status\":200,\n        \"metadata\":null,\n        \"content\":[\n            {\n                \"id\":\"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\":\"Hello World\",\n                \"createdAt\":\"2015-11-05T08:15:30-05:00\",\n                \"publisherId\":\"sselvadurai\",\n                \"read\": true,\n                \"attachments\": [\n                    {\n                      \"attachmentId\":\"guid-or-identifier-for-attachment\",\n                      \"name\":\"name-of-attachment\",\n                      \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment.png\",\n                      \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment.png\"\n                    },\n                    {\n                      \"attachmentId\":\"guid-or-identifier-for-attachment01\",\n                      \"name\":\"name-of-attachment01\",\n                      \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment01.png\",\n                      \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment01.png\"\n                    }\n                ]\n            }\n        ],\n    },\n    \"version\":\"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Create a new message",
                                                                "description": "",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"threadId\":\"guid-or-identifier-for-thread\",\n    \"publisherId\": \"guid-or-idenfitier-for-user-id\",\n    \"body\":\"Hello World\",\n    \"attachments\": [\n        {\n          \"attachmentId\":\"guid-or-identifier-for-attachment\",\n          \"name\":\"name-of-attachment\"\n        },\n        {\n          \"attachmentId\":\"guid-or-identifier-for-attachment01\",\n          \"name\":\"name-of-attachment01\"\n        }\n    ]\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"threadId\":\"guid-or-identifier-for-thread\",\n    \"publisherId\": \"guid-or-idenfitier-for-user-id\",\n    \"body\":\"Hello World\",\n    \"attachments\": [\n        {\n          \"attachmentId\":\"guid-or-identifier-for-attachment\",\n          \"name\":\"name-of-attachment\"\n        },\n        {\n          \"attachmentId\":\"guid-or-identifier-for-attachment01\",\n          \"name\":\"name-of-attachment01\"\n        }\n    ]\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "201",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        },
                                                                                                        {
                                                                                                                "name": "Location",
                                                                                                                "value": "/messages/1"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "    {\n        \"id\":\"-455f1770:14d6dd97f63:-7f9c\",\n        \"result\": {\n            \"success\":true,\n            \"status\":200,\n            \"metadata\":null,\n            \"content\":{ \n                \"id\": \"guid-or-identifier-for-message-object\" \n            }  \n        },\n        \"version\":\"v3\"\n    }\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "    {\n        \"id\":\"-455f1770:14d6dd97f63:-7f9c\",\n        \"result\": {\n            \"success\":true,\n            \"status\":200,\n            \"metadata\":null,\n            \"content\":{ \n                \"id\": \"guid-or-identifier-for-message-object\" \n            }  \n        },\n        \"version\":\"v3\"\n    }\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Update an existing message",
                                                                "description": "",
                                                                "method": "PUT",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/messages/{id}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"threadId\":\"guid-or-identifier-for-thread-object\",\n    \"subscriberId\":\"santthosh\",\n    \"read\":true\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"threadId\":\"guid-or-identifier-for-thread-object\",\n    \"subscriberId\":\"santthosh\",\n    \"read\":true\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "204",
                                                                                                "description": "",
                                                                                                "headers": [],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        }
                                ]
                        }
                ],
                "content": [
                        {
                                "element": "category",
                                "content": [
                                        {
                                                "element": "resource",
                                                "name": "Threads",
                                                "description": "Authroization header has to be provided along with this request to identify the user. A thread object has the following attributes\n\n+ threadId - unique identifier for the thread storing messages.  This identifier will be generated by the messaging service to identify a unique thread.\n\n+ clientIdentifier - a unique identifier coming from the consumer of the Messaging Service.  The combination of clientIdentifier and the list of Publishers make up the unique key that identifies a ThreadId\n\n+ context - context refers to a string identifier on which this message is being posted, if the message is posted as a generic one on the project then it has a context of 'work'\n\n+ subject - This is the subject for a threaded message.  Typically this will be the Project Title in our use case.\n\n+ publishers - list of user identifiers who have the ability to publish to this thread.  This will be the numeric id for a user\n\n+ subscribers - list of the user identifiers who have the ability to read from a thread.  This will be the numeric id for a user\n\n",
                                                "uriTemplate": "/threads",
                                                "model": {},
                                                "parameters": [],
                                                "actions": [
                                                        {
                                                                "name": "Create a new Thread",
                                                                "description": "Create a Threaded conversation between multiple publishers\n\n",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"clientIdentifier\":\"guid-or-identifier-for-work-object\",\n    \"context\":\"work\",\n    \"subject\",:\"subject-title\",\n    \"publishers\": [\n        \"jsymons\"\n    ],\n    \"subscribers\": [\n        \"jsymons\"\n    ]\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"clientIdentifier\":\"guid-or-identifier-for-work-object\",\n    \"context\":\"work\",\n    \"subject\",:\"subject-title\",\n    \"publishers\": [\n        \"jsymons\"\n    ],\n    \"subscribers\": [\n        \"jsymons\"\n    ]\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "201",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        },
                                                                                                        {
                                                                                                                "name": "Location",
                                                                                                                "value": "/threads/1"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "    {\n        \"id\":\"-455f1770:14d6dd97f63:-7f9c\",\n        \"result\": {\n            \"success\":true,\n            \"status\":200,\n            \"metadata\":null,\n            \"content\":{ \n                \"id\": \"guid-or-identifier-for-thread-object\" \n            }  \n        },\n        \"version\":\"v3\"\n    }\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "    {\n        \"id\":\"-455f1770:14d6dd97f63:-7f9c\",\n        \"result\": {\n            \"success\":true,\n            \"status\":200,\n            \"metadata\":null,\n            \"content\":{ \n                \"id\": \"guid-or-identifier-for-thread-object\" \n            }  \n        },\n        \"version\":\"v3\"\n    }\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get a Thread",
                                                                "description": "Get a Thread and all underlying Messages associated to that Thread for a given subscriber\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/threads/{thread_id}?subscriberId=subscriberId"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\":\"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\":true,\n        \"status\":200,\n        \"metadata\":null,\n        \"content\":{\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\",:\"subject-title\",\n            \"unreadCount\": 1,\n            \"messages\": [\n                {\n                    \"id\":\"guid-or-identifier-for-message-object\",\n                    \"threadId\": \"guid-or-identifier-for-thread-object\",\n                    \"body\":\"Hello World\",\n                    \"createdAt\":\"2015-11-05T08:15:30-05:00\",\n                    \"publisherId\":\"sselvadurai\",\n                    \"read\": true,\n                    \"attachments\": [\n                        {\n                          \"attachmentId\":\"guid-or-identifier-for-attachment\",\n                          \"name\":\"name-of-attachment\",\n                          \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment.png\",\n                          \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment.png\"\n                        },\n                        {\n                          \"attachmentId\":\"guid-or-identifier-for-attachment01\",\n                          \"name\":\"name-of-attachment01\",\n                          \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment01.png\",\n                          \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment01.png\"\n                        }\n                    ]\n                }\n            ]\n        }\n    },\n    \"version\":\"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\":\"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\":true,\n        \"status\":200,\n        \"metadata\":null,\n        \"content\":{\n            \"id\": \"guid-or-identifier-for-thread-object\",\n            \"subject\",:\"subject-title\",\n            \"unreadCount\": 1,\n            \"messages\": [\n                {\n                    \"id\":\"guid-or-identifier-for-message-object\",\n                    \"threadId\": \"guid-or-identifier-for-thread-object\",\n                    \"body\":\"Hello World\",\n                    \"createdAt\":\"2015-11-05T08:15:30-05:00\",\n                    \"publisherId\":\"sselvadurai\",\n                    \"read\": true,\n                    \"attachments\": [\n                        {\n                          \"attachmentId\":\"guid-or-identifier-for-attachment\",\n                          \"name\":\"name-of-attachment\",\n                          \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment.png\",\n                          \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment.png\"\n                        },\n                        {\n                          \"attachmentId\":\"guid-or-identifier-for-attachment01\",\n                          \"name\":\"name-of-attachment01\",\n                          \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment01.png\",\n                          \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment01.png\"\n                        }\n                    ]\n                }\n            ]\n        }\n    },\n    \"version\":\"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Get all Threads for a User",
                                                                "description": "Get all of the threads for a given subscriber\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/threads?subscriberId=subscriberId"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\":\"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\":true,\n        \"status\":200,\n        \"metadata\":null,\n        \"content\": {\n            \"totalUnreadCount\": 1,\n            \"threads\": [\n                {\n                    \"id\": \"guid-or-identifier-for-thread-object\",\n                    \"subject\",:\"subject-title\",\n                    \"unreadCount\": 1,\n                    \"messages\": [\n                        {\n                            \"id\":\"guid-or-identifier-for-message-object\",\n                            \"threadId\": \"guid-or-identifier-for-thread-object\",\n                            \"body\":\"Hello World\",\n                            \"createdAt\":\"2015-11-05T08:15:30-05:00\",\n                            \"publisherId\":\"sselvadurai\",\n                            \"read\": true,\n                            \"attachments\": [\n                                {\n                                  \"attachmentId\":\"guid-or-identifier-for-attachment\",\n                                  \"name\":\"name-of-attachment\",\n                                  \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment.png\",\n                                  \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment.png\"\n                                },\n                                {\n                                  \"attachmentId\":\"guid-or-identifier-for-attachment01\",\n                                  \"name\":\"name-of-attachment01\",\n                                  \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment01.png\",\n                                  \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment01.png\"\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    },\n    \"version\":\"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\":\"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\":true,\n        \"status\":200,\n        \"metadata\":null,\n        \"content\": {\n            \"totalUnreadCount\": 1,\n            \"threads\": [\n                {\n                    \"id\": \"guid-or-identifier-for-thread-object\",\n                    \"subject\",:\"subject-title\",\n                    \"unreadCount\": 1,\n                    \"messages\": [\n                        {\n                            \"id\":\"guid-or-identifier-for-message-object\",\n                            \"threadId\": \"guid-or-identifier-for-thread-object\",\n                            \"body\":\"Hello World\",\n                            \"createdAt\":\"2015-11-05T08:15:30-05:00\",\n                            \"publisherId\":\"sselvadurai\",\n                            \"read\": true,\n                            \"attachments\": [\n                                {\n                                  \"attachmentId\":\"guid-or-identifier-for-attachment\",\n                                  \"name\":\"name-of-attachment\",\n                                  \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment.png\",\n                                  \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment.png\"\n                                },\n                                {\n                                  \"attachmentId\":\"guid-or-identifier-for-attachment01\",\n                                  \"name\":\"name-of-attachment01\",\n                                  \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment01.png\",\n                                  \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment01.png\"\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    },\n    \"version\":\"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        },
                                        {
                                                "element": "resource",
                                                "name": "Messages",
                                                "description": "Authroization header has to be provided along with this request to identify the user. A message object has the following attributes\n\n+ threadId - unique identifier for the thread storing messages.  This identifier will be generated by the messaging service to identify a unique thread.\n\n+ body - plain text body of the message \n\n+ read - marks a message as 'read' given the subscriberId that was passed into the query\n\n+ context - context refers to a string identifier on which this message is being posted, if the message is posted as a generic one on the project then it has a context of 'work'\n\n+ publisherId - the id of the user that is publishing the message.  This value is checked to ensure the user has the ability to post a message to a given thread\n\n+ subscriberId - the id of the user that is currently viewing the messages.  This user is checked to ensure the user has the ability to read from the given thread\n\n+ attachments - list of attachment objects associated with the message\n\n",
                                                "uriTemplate": "/messages",
                                                "model": {},
                                                "parameters": [],
                                                "actions": [
                                                        {
                                                                "name": "Retrieve the messages",
                                                                "description": "These are the optional parameters, if none is provided, we would return all messages across all the projects, ordered by createAt date desc, i.e. recent 10 messages\n\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/messages/{id}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\":\"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\":true,\n        \"status\":200,\n        \"metadata\":null,\n        \"content\":[\n            {\n                \"id\":\"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\":\"Hello World\",\n                \"createdAt\":\"2015-11-05T08:15:30-05:00\",\n                \"publisherId\":\"sselvadurai\",\n                \"read\": true,\n                \"attachments\": [\n                    {\n                      \"attachmentId\":\"guid-or-identifier-for-attachment\",\n                      \"name\":\"name-of-attachment\",\n                      \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment.png\",\n                      \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment.png\"\n                    },\n                    {\n                      \"attachmentId\":\"guid-or-identifier-for-attachment01\",\n                      \"name\":\"name-of-attachment01\",\n                      \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment01.png\",\n                      \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment01.png\"\n                    }\n                ]\n            }\n        ],\n    },\n    \"version\":\"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\":\"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\":true,\n        \"status\":200,\n        \"metadata\":null,\n        \"content\":[\n            {\n                \"id\":\"guid-or-identifier-for-message-object\",\n                \"threadId\": \"guid-or-identifier-for-thread-object\",\n                \"body\":\"Hello World\",\n                \"createdAt\":\"2015-11-05T08:15:30-05:00\",\n                \"publisherId\":\"sselvadurai\",\n                \"read\": true,\n                \"attachments\": [\n                    {\n                      \"attachmentId\":\"guid-or-identifier-for-attachment\",\n                      \"name\":\"name-of-attachment\",\n                      \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment.png\",\n                      \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment.png\"\n                    },\n                    {\n                      \"attachmentId\":\"guid-or-identifier-for-attachment01\",\n                      \"name\":\"name-of-attachment01\",\n                      \"thumbUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/thumbnail-guid-or-identifier-for-attachment01.png\",\n                      \"originalUrl\":\"http://assets.topcoder.com/guid-or-identifier-for-work-object/original-guid-or-identifier-for-attachment01.png\"\n                    }\n                ]\n            }\n        ],\n    },\n    \"version\":\"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Create a new message",
                                                                "description": "",
                                                                "method": "POST",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"threadId\":\"guid-or-identifier-for-thread\",\n    \"publisherId\": \"guid-or-idenfitier-for-user-id\",\n    \"body\":\"Hello World\",\n    \"attachments\": [\n        {\n          \"attachmentId\":\"guid-or-identifier-for-attachment\",\n          \"name\":\"name-of-attachment\"\n        },\n        {\n          \"attachmentId\":\"guid-or-identifier-for-attachment01\",\n          \"name\":\"name-of-attachment01\"\n        }\n    ]\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"threadId\":\"guid-or-identifier-for-thread\",\n    \"publisherId\": \"guid-or-idenfitier-for-user-id\",\n    \"body\":\"Hello World\",\n    \"attachments\": [\n        {\n          \"attachmentId\":\"guid-or-identifier-for-attachment\",\n          \"name\":\"name-of-attachment\"\n        },\n        {\n          \"attachmentId\":\"guid-or-identifier-for-attachment01\",\n          \"name\":\"name-of-attachment01\"\n        }\n    ]\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "201",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        },
                                                                                                        {
                                                                                                                "name": "Location",
                                                                                                                "value": "/messages/1"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "    {\n        \"id\":\"-455f1770:14d6dd97f63:-7f9c\",\n        \"result\": {\n            \"success\":true,\n            \"status\":200,\n            \"metadata\":null,\n            \"content\":{ \n                \"id\": \"guid-or-identifier-for-message-object\" \n            }  \n        },\n        \"version\":\"v3\"\n    }\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "    {\n        \"id\":\"-455f1770:14d6dd97f63:-7f9c\",\n        \"result\": {\n            \"success\":true,\n            \"status\":200,\n            \"metadata\":null,\n            \"content\":{ \n                \"id\": \"guid-or-identifier-for-message-object\" \n            }  \n        },\n        \"version\":\"v3\"\n    }\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Update an existing message",
                                                                "description": "",
                                                                "method": "PUT",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": "/messages/{id}"
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"threadId\":\"guid-or-identifier-for-thread-object\",\n    \"subscriberId\":\"santthosh\",\n    \"read\":true\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"threadId\":\"guid-or-identifier-for-thread-object\",\n    \"subscriberId\":\"santthosh\",\n    \"read\":true\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "204",
                                                                                                "description": "",
                                                                                                "headers": [],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        }
                                ]
                        }
                ]
        },
        "warnings": [],
        "sourcemap": null
},
    "apiary/submissiondraft.json": {
        "ast": {
                "_version": "3.0",
                "metadata": [
                        {
                                "name": "FORMAT",
                                "value": "1A"
                        },
                        {
                                "name": "HOST",
                                "value": "https://api.topcoder.com/v3/"
                        }
                ],
                "name": "ASP Application Service (Draft)",
                "description": "As part of the application service submissions offers API's to access the submissions list or view a specific one. Messaging follows the v3 API spec defined in [here](https://docs.google.com/presentation/d/15pucEI0MHj9y778EyaAWGh4MBH-I73i1-GS0ir7FhxE/edit#slide=id.g29c3ffcc3_053).\n\n",
                "element": "category",
                "resourceGroups": [
                        {
                                "name": "",
                                "description": "",
                                "resources": [
                                        {
                                                "element": "resource",
                                                "name": "Submissions",
                                                "description": "A Submission group has the following attributes:\n\n+ work - the object describing the work that the submissions belong to\n\n+ phase - the object describing the phase that the submissions belong to\n\n+ numberOfRanks - total number of ranks that the submission group has\n\n+ confirmed - whether the submissions have been confirmed or not, default to be null\n\n+ submissions - list of submission objects within the submission group\n\n",
                                                "uriTemplate": "/projects/{work_id}/submissions?filter=phase=in(concept,final)",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "work_id",
                                                                "description": "ID of the work in form of an integer",
                                                                "type": "number",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        },
                                                        {
                                                                "name": "phase",
                                                                "description": "phase of the work submisssions, either \"concept\" or \"final\"; if not provided, return all the phases up to date",
                                                                "type": "string",
                                                                "required": false,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "Get all the submissions",
                                                                "description": "Get all the submissions for the given work and phase.\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"work\": {\n                \"name\": \"IBM Internal HR\",\n                \"type\": \"mobile app\"\n            },\n            \"phase\": {\n                \"startDate\": \"2008-10-15T05:08:00.000-0400\",\n                \"endDate\": \"2008-10-15T05:08:00.000-0400\",\n                \"nextStartDate\": \"2008-10-15T05:08:00.000-0400\"\n            },\n            \"numberOfRanks\": \"5\",\n            \"confirmed\": null,\n            \"submissions\": [{\n                \"id\": \"1234\",\n                \"submitter\": {\n                    \"id\": \"123456\",\n                    \"handle\": \"Batman\",\n                    \"avatarUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                \"rank\": 0,\n                \"createdAt\": \"2008-10-15T05:08:00.000-0400\",\n                \"downloadUrl\": \"https://s3.amazonaws.com/topcoder-dev-media/app-project/40135590/1437590106941-5bc6794b-7fa9-48ae-8a5e-93f678bab4fc/brief/screen1.png\",\n                \"files\": [{\n                    \"id\": \"1234567\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234568\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234569\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234570\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234571\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234572\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                }]\n            },\n            {\n                \"id\": \"1235\",\n                \"submitter\": {\n                \"id\": \"123457\",\n                \"handle\": \"Batman\",\n                \"avatarUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                \"rank\":\"0\",\n                \"createdAt\": \"2008-10-15T05:08:00.000-0400\",\n                \"downloadUrl\": \"https://s3.amazonaws.com/topcoder-dev-media/app-project/40135590/1437590106941-5bc6794b-7fa9-48ae-8a5e-93f678bab4fc/brief/screen1.png\",\n                \"files\": [{\n                    \"id\": \"1234573\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234574\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234575\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234576\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234577\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234578\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                }]\n            }]\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"work\": {\n                \"name\": \"IBM Internal HR\",\n                \"type\": \"mobile app\"\n            },\n            \"phase\": {\n                \"startDate\": \"2008-10-15T05:08:00.000-0400\",\n                \"endDate\": \"2008-10-15T05:08:00.000-0400\",\n                \"nextStartDate\": \"2008-10-15T05:08:00.000-0400\"\n            },\n            \"numberOfRanks\": \"5\",\n            \"confirmed\": null,\n            \"submissions\": [{\n                \"id\": \"1234\",\n                \"submitter\": {\n                    \"id\": \"123456\",\n                    \"handle\": \"Batman\",\n                    \"avatarUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                \"rank\": 0,\n                \"createdAt\": \"2008-10-15T05:08:00.000-0400\",\n                \"downloadUrl\": \"https://s3.amazonaws.com/topcoder-dev-media/app-project/40135590/1437590106941-5bc6794b-7fa9-48ae-8a5e-93f678bab4fc/brief/screen1.png\",\n                \"files\": [{\n                    \"id\": \"1234567\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234568\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234569\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234570\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234571\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234572\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                }]\n            },\n            {\n                \"id\": \"1235\",\n                \"submitter\": {\n                \"id\": \"123457\",\n                \"handle\": \"Batman\",\n                \"avatarUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                \"rank\":\"0\",\n                \"createdAt\": \"2008-10-15T05:08:00.000-0400\",\n                \"downloadUrl\": \"https://s3.amazonaws.com/topcoder-dev-media/app-project/40135590/1437590106941-5bc6794b-7fa9-48ae-8a5e-93f678bab4fc/brief/screen1.png\",\n                \"files\": [{\n                    \"id\": \"1234573\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234574\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234575\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234576\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234577\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234578\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                }]\n            }]\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Update submissions",
                                                                "description": "Update the confirmation of the submissions.\n    \n",
                                                                "method": "PUT",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"confirmed\": \"2015-05-05T20:53:41.467Z\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"confirmed\": \"2015-05-05T20:53:41.467Z\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "204",
                                                                                                "description": "",
                                                                                                "headers": [],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        },
                                        {
                                                "element": "resource",
                                                "name": "A Submission",
                                                "description": "A Submission object has the following attributes:\n\n+ submitter - the object describing the submitter\n\n+ rank - rank of the submission\n\n+ createdAt - the time when the submission is created\n\n+ files - list of file objects associated with the submission\n\n",
                                                "uriTemplate": "/projects/{work_id}/submissions/{submission_id}",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "work_id",
                                                                "description": "ID of the work in form of an integer",
                                                                "type": "number",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        },
                                                        {
                                                                "name": "submission_id",
                                                                "description": "ID of the submission in form of an integer",
                                                                "type": "number",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "Get a submission",
                                                                "description": "Get information about a submission based on the given submission id.\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"id\": \"123\",\n            \"submitter\": {\n                \"id\": \"123\",\n                \"handle\": \"Alpha User\",\n                \"avatarUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n            },\n            \"rank\": 1,\n            \"createdAt\": \"2008-10-15T05:08:00.000-0400\",\n            \"files\": [{\n                \"id\": \"1234567\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234568\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234569\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234570\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234571\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234572\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n            }]\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"id\": \"123\",\n            \"submitter\": {\n                \"id\": \"123\",\n                \"handle\": \"Alpha User\",\n                \"avatarUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n            },\n            \"rank\": 1,\n            \"createdAt\": \"2008-10-15T05:08:00.000-0400\",\n            \"files\": [{\n                \"id\": \"1234567\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234568\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234569\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234570\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234571\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234572\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n            }]\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Update a submission",
                                                                "description": "Update the rank of the submission.\n\n",
                                                                "method": "PUT",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"rank\": \"1\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"rank\": \"1\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "204",
                                                                                                "description": "",
                                                                                                "headers": [],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        },
                                        {
                                                "element": "resource",
                                                "name": "Final Fixes",
                                                "description": "A final-fixes object has the following attributes:\n\n+ work - the object describing the work that the final-fixes belong to\n\n+ phase - the object describing the phase that the final-fixes belong to\n\n+ downloadUrl\n\n+ confirmed - whether the submissions have been confirmed or not, default to be null\n\n+ submitter - the object describing the submitter\n\n+ files - list of file objects associated with the submission\n\n",
                                                "uriTemplate": "/projects/{work_id}/submissions/final-fixes",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "work_id",
                                                                "description": "ID of the work in form of an integer",
                                                                "type": "number",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "Get submission final fixes",
                                                                "description": "Get information about submission final fixes for the work.\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"work\": {\n                \"name\": \"IBM Internal HR\",\n                \"type\": \"mobile app\"\n            },\n            \"phase\": {\n                \"startDate\": \"2008-10-15T05:08:00.000-0400\",\n                \"endDate\": \"2008-10-15T05:08:00.000-0400\"\n            },\n            \"id\": \"abc\",\n            \"downloadUrl\": \"http://www.google.com/url\",\n            \"confirmed\": null,\n            \"submitter\": {\n                \"id\": \"123\",\n                \"handle\": \"Alpha User\",\n                \"avatarUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n            },\n            \"files\": [{\n                \"id\": \"1234567\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234568\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234569\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234570\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234571\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234572\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n            }]\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"work\": {\n                \"name\": \"IBM Internal HR\",\n                \"type\": \"mobile app\"\n            },\n            \"phase\": {\n                \"startDate\": \"2008-10-15T05:08:00.000-0400\",\n                \"endDate\": \"2008-10-15T05:08:00.000-0400\"\n            },\n            \"id\": \"abc\",\n            \"downloadUrl\": \"http://www.google.com/url\",\n            \"confirmed\": null,\n            \"submitter\": {\n                \"id\": \"123\",\n                \"handle\": \"Alpha User\",\n                \"avatarUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n            },\n            \"files\": [{\n                \"id\": \"1234567\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234568\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234569\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234570\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234571\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234572\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n            }]\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Update the final fixes",
                                                                "description": "Update the confirmation of final fixes of the submissions.\n    \n",
                                                                "method": "PUT",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"confirmed\": \"2015-05-05T20:53:41.467Z\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"confirmed\": \"2015-05-05T20:53:41.467Z\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "204",
                                                                                                "description": "",
                                                                                                "headers": [],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        },
                                        {
                                                "element": "resource",
                                                "name": "File",
                                                "description": "",
                                                "uriTemplate": "/projects/{work_id}/submissions/file/{file_id}",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "work_id",
                                                                "description": "ID of the work in form of an integer",
                                                                "type": "number",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        },
                                                        {
                                                                "name": "file_id",
                                                                "description": "ID of the file to be accepted",
                                                                "type": "number",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "Accept a submission file",
                                                                "description": "",
                                                                "method": "PUT",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"accepted\": true\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"accepted\": true\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "204",
                                                                                                "description": "",
                                                                                                "headers": [],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        },
                                        {
                                                "element": "resource",
                                                "name": "Timeline Events",
                                                "description": "Authroization header has to be provided along with this request to identify the user.\n\n",
                                                "uriTemplate": "/work/{work_id}/timeline",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "work_id",
                                                                "description": "ID of the work in form of an integer",
                                                                "type": "number",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "Get the timeline events",
                                                                "description": "Get information of the timeline events\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"confirmEmail\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"address\": \"john@example.com\"\n            },\n            \"assignCopilot\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"userId\": 123,\n                \"handle\": \"Batman\"\n            },\n            \"quote\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"price\": 1500,\n                \"duration\": 20,\n                \"accepted\": true\n            },\n            \"paymentAccepted\": {\n                \"created\": \"12:30pm April 5 2015\"\n            },\n            \"launch\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"comments\": [{\n                    \"avatar\": \"avatar\",\n                    \"handle\": \"Batman\",\n                    \"notification\": 5,\n                    \"threadId\": \"abc123\",\n                    \"fileName\": \"Project Requirement\"\n                }]\n            },\n            \"members\": [{\n                \"created\": \"12:30pm April 5 2015\",\n                \"handle\": \"Batman #{i}\",\n                \"avatar\": \"avatar\"\n            }],\n            \"lastMessage\": {\n                \"avatar\": \"avatar\",\n                \"handle\": \"Batman\",\n                \"notification\": 5,\n                \"threadId\": \"abc123\",\n                \"message\": \"Maybe its best if we stick with something something something something.\"\n            },\n            \"designConcepts\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submissionAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ],\n                \"notificationCount\": 5,\n                \"comments\": [{\n                    \"avatar\": \"avatar\",\n                    \"handle\": \"Batman\",\n                    \"notification\": 5,\n                    \"threadId\": \"abc123\",\n                    \"fileName\": \"Project Requirement\"\n                }],\n                \"winnerAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ]\n            },\n            \"finalDesigns\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submissionAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ],\n                \"winnerAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ]\n            },\n            \"finalFixes\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submissionAvatar\": \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\",\n                \"notificationCount\": 5,\n                \"comments\": [{\n                    \"avatar\": \"avatar\",\n                    \"handle\": \"Batman\",\n                    \"notification\": 5,\n                    \"threadId\": \"abc123\",\n                    \"fileName\": \"Project Requirement\"\n                }],\n                \"winnerAvatar\": \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n            },\n            \"completed\": {\n                \"created\": \"12:30pm April 5 2015\"\n            }\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"confirmEmail\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"address\": \"john@example.com\"\n            },\n            \"assignCopilot\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"userId\": 123,\n                \"handle\": \"Batman\"\n            },\n            \"quote\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"price\": 1500,\n                \"duration\": 20,\n                \"accepted\": true\n            },\n            \"paymentAccepted\": {\n                \"created\": \"12:30pm April 5 2015\"\n            },\n            \"launch\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"comments\": [{\n                    \"avatar\": \"avatar\",\n                    \"handle\": \"Batman\",\n                    \"notification\": 5,\n                    \"threadId\": \"abc123\",\n                    \"fileName\": \"Project Requirement\"\n                }]\n            },\n            \"members\": [{\n                \"created\": \"12:30pm April 5 2015\",\n                \"handle\": \"Batman #{i}\",\n                \"avatar\": \"avatar\"\n            }],\n            \"lastMessage\": {\n                \"avatar\": \"avatar\",\n                \"handle\": \"Batman\",\n                \"notification\": 5,\n                \"threadId\": \"abc123\",\n                \"message\": \"Maybe its best if we stick with something something something something.\"\n            },\n            \"designConcepts\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submissionAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ],\n                \"notificationCount\": 5,\n                \"comments\": [{\n                    \"avatar\": \"avatar\",\n                    \"handle\": \"Batman\",\n                    \"notification\": 5,\n                    \"threadId\": \"abc123\",\n                    \"fileName\": \"Project Requirement\"\n                }],\n                \"winnerAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ]\n            },\n            \"finalDesigns\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submissionAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ],\n                \"winnerAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ]\n            },\n            \"finalFixes\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submissionAvatar\": \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\",\n                \"notificationCount\": 5,\n                \"comments\": [{\n                    \"avatar\": \"avatar\",\n                    \"handle\": \"Batman\",\n                    \"notification\": 5,\n                    \"threadId\": \"abc123\",\n                    \"fileName\": \"Project Requirement\"\n                }],\n                \"winnerAvatar\": \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n            },\n            \"completed\": {\n                \"created\": \"12:30pm April 5 2015\"\n            }\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        }
                                ]
                        }
                ],
                "content": [
                        {
                                "element": "category",
                                "content": [
                                        {
                                                "element": "resource",
                                                "name": "Submissions",
                                                "description": "A Submission group has the following attributes:\n\n+ work - the object describing the work that the submissions belong to\n\n+ phase - the object describing the phase that the submissions belong to\n\n+ numberOfRanks - total number of ranks that the submission group has\n\n+ confirmed - whether the submissions have been confirmed or not, default to be null\n\n+ submissions - list of submission objects within the submission group\n\n",
                                                "uriTemplate": "/projects/{work_id}/submissions?filter=phase=in(concept,final)",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "work_id",
                                                                "description": "ID of the work in form of an integer",
                                                                "type": "number",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        },
                                                        {
                                                                "name": "phase",
                                                                "description": "phase of the work submisssions, either \"concept\" or \"final\"; if not provided, return all the phases up to date",
                                                                "type": "string",
                                                                "required": false,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "Get all the submissions",
                                                                "description": "Get all the submissions for the given work and phase.\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"work\": {\n                \"name\": \"IBM Internal HR\",\n                \"type\": \"mobile app\"\n            },\n            \"phase\": {\n                \"startDate\": \"2008-10-15T05:08:00.000-0400\",\n                \"endDate\": \"2008-10-15T05:08:00.000-0400\",\n                \"nextStartDate\": \"2008-10-15T05:08:00.000-0400\"\n            },\n            \"numberOfRanks\": \"5\",\n            \"confirmed\": null,\n            \"submissions\": [{\n                \"id\": \"1234\",\n                \"submitter\": {\n                    \"id\": \"123456\",\n                    \"handle\": \"Batman\",\n                    \"avatarUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                \"rank\": 0,\n                \"createdAt\": \"2008-10-15T05:08:00.000-0400\",\n                \"downloadUrl\": \"https://s3.amazonaws.com/topcoder-dev-media/app-project/40135590/1437590106941-5bc6794b-7fa9-48ae-8a5e-93f678bab4fc/brief/screen1.png\",\n                \"files\": [{\n                    \"id\": \"1234567\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234568\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234569\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234570\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234571\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234572\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                }]\n            },\n            {\n                \"id\": \"1235\",\n                \"submitter\": {\n                \"id\": \"123457\",\n                \"handle\": \"Batman\",\n                \"avatarUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                \"rank\":\"0\",\n                \"createdAt\": \"2008-10-15T05:08:00.000-0400\",\n                \"downloadUrl\": \"https://s3.amazonaws.com/topcoder-dev-media/app-project/40135590/1437590106941-5bc6794b-7fa9-48ae-8a5e-93f678bab4fc/brief/screen1.png\",\n                \"files\": [{\n                    \"id\": \"1234573\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234574\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234575\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234576\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234577\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234578\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                }]\n            }]\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"work\": {\n                \"name\": \"IBM Internal HR\",\n                \"type\": \"mobile app\"\n            },\n            \"phase\": {\n                \"startDate\": \"2008-10-15T05:08:00.000-0400\",\n                \"endDate\": \"2008-10-15T05:08:00.000-0400\",\n                \"nextStartDate\": \"2008-10-15T05:08:00.000-0400\"\n            },\n            \"numberOfRanks\": \"5\",\n            \"confirmed\": null,\n            \"submissions\": [{\n                \"id\": \"1234\",\n                \"submitter\": {\n                    \"id\": \"123456\",\n                    \"handle\": \"Batman\",\n                    \"avatarUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                \"rank\": 0,\n                \"createdAt\": \"2008-10-15T05:08:00.000-0400\",\n                \"downloadUrl\": \"https://s3.amazonaws.com/topcoder-dev-media/app-project/40135590/1437590106941-5bc6794b-7fa9-48ae-8a5e-93f678bab4fc/brief/screen1.png\",\n                \"files\": [{\n                    \"id\": \"1234567\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234568\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234569\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234570\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234571\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234572\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                }]\n            },\n            {\n                \"id\": \"1235\",\n                \"submitter\": {\n                \"id\": \"123457\",\n                \"handle\": \"Batman\",\n                \"avatarUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                \"rank\":\"0\",\n                \"createdAt\": \"2008-10-15T05:08:00.000-0400\",\n                \"downloadUrl\": \"https://s3.amazonaws.com/topcoder-dev-media/app-project/40135590/1437590106941-5bc6794b-7fa9-48ae-8a5e-93f678bab4fc/brief/screen1.png\",\n                \"files\": [{\n                    \"id\": \"1234573\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234574\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234575\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234576\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234577\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                    },\n                    {\n                    \"id\": \"1234578\",\n                    \"name\": \"BatBaby\",\n                    \"accepted\": true,\n                    \"downloadUrl\": \"http://www.google.com/url\",\n                    \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                }]\n            }]\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Update submissions",
                                                                "description": "Update the confirmation of the submissions.\n    \n",
                                                                "method": "PUT",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"confirmed\": \"2015-05-05T20:53:41.467Z\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"confirmed\": \"2015-05-05T20:53:41.467Z\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "204",
                                                                                                "description": "",
                                                                                                "headers": [],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        },
                                        {
                                                "element": "resource",
                                                "name": "A Submission",
                                                "description": "A Submission object has the following attributes:\n\n+ submitter - the object describing the submitter\n\n+ rank - rank of the submission\n\n+ createdAt - the time when the submission is created\n\n+ files - list of file objects associated with the submission\n\n",
                                                "uriTemplate": "/projects/{work_id}/submissions/{submission_id}",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "work_id",
                                                                "description": "ID of the work in form of an integer",
                                                                "type": "number",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        },
                                                        {
                                                                "name": "submission_id",
                                                                "description": "ID of the submission in form of an integer",
                                                                "type": "number",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "Get a submission",
                                                                "description": "Get information about a submission based on the given submission id.\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"id\": \"123\",\n            \"submitter\": {\n                \"id\": \"123\",\n                \"handle\": \"Alpha User\",\n                \"avatarUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n            },\n            \"rank\": 1,\n            \"createdAt\": \"2008-10-15T05:08:00.000-0400\",\n            \"files\": [{\n                \"id\": \"1234567\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234568\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234569\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234570\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234571\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234572\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n            }]\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"id\": \"123\",\n            \"submitter\": {\n                \"id\": \"123\",\n                \"handle\": \"Alpha User\",\n                \"avatarUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n            },\n            \"rank\": 1,\n            \"createdAt\": \"2008-10-15T05:08:00.000-0400\",\n            \"files\": [{\n                \"id\": \"1234567\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234568\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234569\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234570\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234571\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234572\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n            }]\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Update a submission",
                                                                "description": "Update the rank of the submission.\n\n",
                                                                "method": "PUT",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"rank\": \"1\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"rank\": \"1\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "204",
                                                                                                "description": "",
                                                                                                "headers": [],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        },
                                        {
                                                "element": "resource",
                                                "name": "Final Fixes",
                                                "description": "A final-fixes object has the following attributes:\n\n+ work - the object describing the work that the final-fixes belong to\n\n+ phase - the object describing the phase that the final-fixes belong to\n\n+ downloadUrl\n\n+ confirmed - whether the submissions have been confirmed or not, default to be null\n\n+ submitter - the object describing the submitter\n\n+ files - list of file objects associated with the submission\n\n",
                                                "uriTemplate": "/projects/{work_id}/submissions/final-fixes",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "work_id",
                                                                "description": "ID of the work in form of an integer",
                                                                "type": "number",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "Get submission final fixes",
                                                                "description": "Get information about submission final fixes for the work.\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"work\": {\n                \"name\": \"IBM Internal HR\",\n                \"type\": \"mobile app\"\n            },\n            \"phase\": {\n                \"startDate\": \"2008-10-15T05:08:00.000-0400\",\n                \"endDate\": \"2008-10-15T05:08:00.000-0400\"\n            },\n            \"id\": \"abc\",\n            \"downloadUrl\": \"http://www.google.com/url\",\n            \"confirmed\": null,\n            \"submitter\": {\n                \"id\": \"123\",\n                \"handle\": \"Alpha User\",\n                \"avatarUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n            },\n            \"files\": [{\n                \"id\": \"1234567\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234568\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234569\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234570\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234571\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234572\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n            }]\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"work\": {\n                \"name\": \"IBM Internal HR\",\n                \"type\": \"mobile app\"\n            },\n            \"phase\": {\n                \"startDate\": \"2008-10-15T05:08:00.000-0400\",\n                \"endDate\": \"2008-10-15T05:08:00.000-0400\"\n            },\n            \"id\": \"abc\",\n            \"downloadUrl\": \"http://www.google.com/url\",\n            \"confirmed\": null,\n            \"submitter\": {\n                \"id\": \"123\",\n                \"handle\": \"Alpha User\",\n                \"avatarUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n            },\n            \"files\": [{\n                \"id\": \"1234567\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234568\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234569\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234570\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234571\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n                },\n                {\n                \"id\": \"1234572\",\n                \"name\": \"BatBaby\",\n                \"accepted\": true,\n                \"downloadUrl\": \"http://www.google.com/url\",\n                \"thumbnailUrl\": \"http://www.topcoder.com/i/m/cardiboy_big.jpg\"\n            }]\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        },
                                                        {
                                                                "name": "Update the final fixes",
                                                                "description": "Update the confirmation of final fixes of the submissions.\n    \n",
                                                                "method": "PUT",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"confirmed\": \"2015-05-05T20:53:41.467Z\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"confirmed\": \"2015-05-05T20:53:41.467Z\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "204",
                                                                                                "description": "",
                                                                                                "headers": [],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        },
                                        {
                                                "element": "resource",
                                                "name": "File",
                                                "description": "",
                                                "uriTemplate": "/projects/{work_id}/submissions/file/{file_id}",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "work_id",
                                                                "description": "ID of the work in form of an integer",
                                                                "type": "number",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        },
                                                        {
                                                                "name": "file_id",
                                                                "description": "ID of the file to be accepted",
                                                                "type": "number",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "Accept a submission file",
                                                                "description": "",
                                                                "method": "PUT",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [
                                                                                        {
                                                                                                "name": "",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"accepted\": true\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"accepted\": true\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "204",
                                                                                                "description": "",
                                                                                                "headers": [],
                                                                                                "body": "",
                                                                                                "schema": "",
                                                                                                "content": []
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        },
                                        {
                                                "element": "resource",
                                                "name": "Timeline Events",
                                                "description": "Authroization header has to be provided along with this request to identify the user.\n\n",
                                                "uriTemplate": "/work/{work_id}/timeline",
                                                "model": {},
                                                "parameters": [
                                                        {
                                                                "name": "work_id",
                                                                "description": "ID of the work in form of an integer",
                                                                "type": "number",
                                                                "required": true,
                                                                "default": "",
                                                                "example": "",
                                                                "values": []
                                                        }
                                                ],
                                                "actions": [
                                                        {
                                                                "name": "Get the timeline events",
                                                                "description": "Get information of the timeline events\n\n",
                                                                "method": "GET",
                                                                "parameters": [],
                                                                "attributes": {
                                                                        "relation": "",
                                                                        "uriTemplate": ""
                                                                },
                                                                "content": [],
                                                                "examples": [
                                                                        {
                                                                                "name": "",
                                                                                "description": "",
                                                                                "requests": [],
                                                                                "responses": [
                                                                                        {
                                                                                                "name": "200",
                                                                                                "description": "",
                                                                                                "headers": [
                                                                                                        {
                                                                                                                "name": "Content-Type",
                                                                                                                "value": "application/json"
                                                                                                        }
                                                                                                ],
                                                                                                "body": "{\n    \"id\": \"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"confirmEmail\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"address\": \"john@example.com\"\n            },\n            \"assignCopilot\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"userId\": 123,\n                \"handle\": \"Batman\"\n            },\n            \"quote\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"price\": 1500,\n                \"duration\": 20,\n                \"accepted\": true\n            },\n            \"paymentAccepted\": {\n                \"created\": \"12:30pm April 5 2015\"\n            },\n            \"launch\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"comments\": [{\n                    \"avatar\": \"avatar\",\n                    \"handle\": \"Batman\",\n                    \"notification\": 5,\n                    \"threadId\": \"abc123\",\n                    \"fileName\": \"Project Requirement\"\n                }]\n            },\n            \"members\": [{\n                \"created\": \"12:30pm April 5 2015\",\n                \"handle\": \"Batman #{i}\",\n                \"avatar\": \"avatar\"\n            }],\n            \"lastMessage\": {\n                \"avatar\": \"avatar\",\n                \"handle\": \"Batman\",\n                \"notification\": 5,\n                \"threadId\": \"abc123\",\n                \"message\": \"Maybe its best if we stick with something something something something.\"\n            },\n            \"designConcepts\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submissionAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ],\n                \"notificationCount\": 5,\n                \"comments\": [{\n                    \"avatar\": \"avatar\",\n                    \"handle\": \"Batman\",\n                    \"notification\": 5,\n                    \"threadId\": \"abc123\",\n                    \"fileName\": \"Project Requirement\"\n                }],\n                \"winnerAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ]\n            },\n            \"finalDesigns\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submissionAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ],\n                \"winnerAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ]\n            },\n            \"finalFixes\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submissionAvatar\": \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\",\n                \"notificationCount\": 5,\n                \"comments\": [{\n                    \"avatar\": \"avatar\",\n                    \"handle\": \"Batman\",\n                    \"notification\": 5,\n                    \"threadId\": \"abc123\",\n                    \"fileName\": \"Project Requirement\"\n                }],\n                \"winnerAvatar\": \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n            },\n            \"completed\": {\n                \"created\": \"12:30pm April 5 2015\"\n            }\n        }\n    },\n    \"version\": \"v3\"\n}\n",
                                                                                                "schema": "",
                                                                                                "content": [
                                                                                                        {
                                                                                                                "element": "asset",
                                                                                                                "attributes": {
                                                                                                                        "role": "bodyExample"
                                                                                                                },
                                                                                                                "content": "{\n    \"id\": \"-455f1770:14d6dd97f63:-7f9c\",\n    \"result\": {\n        \"success\": true,\n        \"status\": 200,\n        \"metadata\": null,\n        \"content\": {\n            \"confirmEmail\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"address\": \"john@example.com\"\n            },\n            \"assignCopilot\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"userId\": 123,\n                \"handle\": \"Batman\"\n            },\n            \"quote\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"price\": 1500,\n                \"duration\": 20,\n                \"accepted\": true\n            },\n            \"paymentAccepted\": {\n                \"created\": \"12:30pm April 5 2015\"\n            },\n            \"launch\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"comments\": [{\n                    \"avatar\": \"avatar\",\n                    \"handle\": \"Batman\",\n                    \"notification\": 5,\n                    \"threadId\": \"abc123\",\n                    \"fileName\": \"Project Requirement\"\n                }]\n            },\n            \"members\": [{\n                \"created\": \"12:30pm April 5 2015\",\n                \"handle\": \"Batman #{i}\",\n                \"avatar\": \"avatar\"\n            }],\n            \"lastMessage\": {\n                \"avatar\": \"avatar\",\n                \"handle\": \"Batman\",\n                \"notification\": 5,\n                \"threadId\": \"abc123\",\n                \"message\": \"Maybe its best if we stick with something something something something.\"\n            },\n            \"designConcepts\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submissionAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ],\n                \"notificationCount\": 5,\n                \"comments\": [{\n                    \"avatar\": \"avatar\",\n                    \"handle\": \"Batman\",\n                    \"notification\": 5,\n                    \"threadId\": \"abc123\",\n                    \"fileName\": \"Project Requirement\"\n                }],\n                \"winnerAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ]\n            },\n            \"finalDesigns\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submissionAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ],\n                \"winnerAvatars\": [\n                    \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n                ]\n            },\n            \"finalFixes\": {\n                \"created\": \"12:30pm April 5 2015\",\n                \"submissionUrl\": \"http://www.google.com\",\n                \"submissionAvatar\": \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\",\n                \"notificationCount\": 5,\n                \"comments\": [{\n                    \"avatar\": \"avatar\",\n                    \"handle\": \"Batman\",\n                    \"notification\": 5,\n                    \"threadId\": \"abc123\",\n                    \"fileName\": \"Project Requirement\"\n                }],\n                \"winnerAvatar\": \"http://www.freakpic.in/wp-content/uploads/2014/10/funny-avatar-6-300x300.jpg\"\n            },\n            \"completed\": {\n                \"created\": \"12:30pm April 5 2015\"\n            }\n        }\n    },\n    \"version\": \"v3\"\n}\n"
                                                                                                        }
                                                                                                ]
                                                                                        }
                                                                                ]
                                                                        }
                                                                ]
                                                        }
                                                ],
                                                "content": []
                                        }
                                ]
                        }
                ]
        },
        "warnings": [],
        "sourcemap": null
}
};
// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List                           = require("bs-platform/lib/js/list.js");
var Block                          = require("bs-platform/lib/js/block.js");
var $$String                       = require("bs-platform/lib/js/string.js");
var SwiftRender$LonaCompilerCore   = require("./swiftRender.bs.js");
var SwiftDocument$LonaCompilerCore = require("./swiftDocument.bs.js");

function render(options, colors) {
  var colorConstantDoc = function (color) {
    var match = color[/* comment */3];
    return /* LineEndComment */Block.__(17, [{
                comment: $$String.uppercase(color[/* value */2]) + (
                  match ? " - " + match[0] : ""
                ),
                line: /* ConstantDeclaration */Block.__(7, [{
                      modifiers: /* :: */[
                        /* AccessLevelModifier */Block.__(0, [/* PublicModifier */3]),
                        /* :: */[
                          /* StaticModifier */11,
                          /* [] */0
                        ]
                      ],
                      pattern: /* IdentifierPattern */Block.__(0, [{
                            identifier: /* SwiftIdentifier */Block.__(6, [color[/* id */0]]),
                            annotation: /* None */0
                          }]),
                      init: /* Some */[/* LiteralExpression */Block.__(0, [/* Color */Block.__(4, [color[/* value */2]])])]
                    }])
              }]);
  };
  return SwiftRender$LonaCompilerCore.toString(/* TopLevelDeclaration */Block.__(20, [{
                  statements: /* :: */[
                    SwiftDocument$LonaCompilerCore.importFramework(options[/* framework */0]),
                    /* :: */[
                      /* Empty */0,
                      /* :: */[
                        /* EnumDeclaration */Block.__(5, [{
                              name: "Colors",
                              modifier: /* Some */[/* PublicModifier */3],
                              body: List.map(colorConstantDoc, colors)
                            }]),
                        /* [] */0
                      ]
                    ]
                  ]
                }]));
}

exports.render = render;
/* SwiftRender-LonaCompilerCore Not a pure module */

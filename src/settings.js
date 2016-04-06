export let settings = {
	"version":	1,
	"language": "en",
	"phrases": [
		{
			"location": "pre-target-type",
			"phrase": "(1st|first)",
			"type": "elm-ordinal",
			"value": 1
		},
		{
			"location": "pre-target-type",
			"phrase": "(2nd|second)",
			"type": "elm-ordinal",
			"value": 2
		},
		{
			"location": "pre-target-type",
			"phrase": "(3rd|third)",
			"type": "elm-ordinal",
			"value": 3
		},
		{
			"location": "pre-target-type",
			"phrase": "([0-9]+)th",
			"type": "elm-ordinal"
		},
		{
			"location": "pre-target-type",
			"phrase": "(small|medium|large)",
			"type": "elm-size"
		},
		{
			"location": "pre-target-type",
			"phrase": "(red|orange|yellow|green|blue|purple|pink|brown|gray|black|white)",
			"type": "elm-color"
		},
		{
			"location": "target-type",
			"phrase": "(element|button|link|input|checkbox|radio|label|image|panel|toolbar|tab|dropdown|item)",
			"type": "elm-type"
		},
		{
			"location": "pre-target-type",
			"phrase": '".*?"',
			"type": "free-text"
		},
		{
			"location": "post-target-type",
			"phrase": "(at the top|at the bottom|on the left|on the right|at the middle)",
			"type": "elm-position"
		},
		{
			"location": "post-target-type",
			"phrase": "with text (\\S*)",
			"type": "elm-text"
		},
		{
			"location": "post-target-type",
			"phrase": "with identity (\\S*)",
			"type": "elm-identity"
		},
		{
			"location": "post-target-type",
			"phrase": "with tag (\\S*)",
			"type": "html-tag"
		},
		{
			"location": "post-target-type",
			"phrase": "with attribute (\\S*)",
			"type": "html-attr-key"
		},
		{
			"location": "post-target-type",
			"phrase": "with attribute value (\\S*)",
			"type": "html-attr-value"
		},
		{
			"location": "post-target-type",
			"phrase": "with attribute (\\S*)=(\\S*)",
			"type": "html-attr-key-and-value"
		},
		{
			"location": "post-target-type",
			"phrase": "with class (\\S*)",
			"type": "css-class"
		},
		{
			"location": "post-target-type",
			"phrase": "with style (\\S*)",
			"type": "css-style-key"
		},
		{
			"location": "post-target-type",
			"phrase": "with style (\\S*):(\\S*)",
			"type": "css-style-key-and-value"
		},
		{
			"location": "post-target-type",
			"phrase": "(above|below|left of|right of|inside)",
			"type": "target-relation"
		}
	],
	 "plans": [
    {
      "type": "elm-type",
      "value": "button",
      "plan": {
        "or": [
          {
            "scorer": "html-tag",
            "param": "button",
            "weight": 1
          },
          {
            "and": [
              {
                "scorer": "html-tag",
                "param": "input",
                "weight": 1
              },
              {
                "scorer": "html-attr-key-and-value",
                "param": [
                  "type",
                  "button"
                ],
                "weight": 1
              }
            ],
            "weight": 1
          },
          {
            "and": [
              {
                "scorer": "html-tag",
                "param": "input",
                "weight": 1
              },
              {
                "scorer": "html-attr-key-and-value",
                "param": [
                  "type",
                  "submit"
                ],
                "weight": 1
              }
            ],
            "weight": 1
          },
          {
            "and": [
              {
                "scorer": "html-tag",
                "param": "a",
                "weight": 1
              },
              {
                "scorer": "css-class",
                "param": [
                  "button",
                  "btn"
                ],
                "weight": 1
              }
            ],
            "weight": 0.8
          },
          {
            "and": [
              {
                "scorer": "html-tag",
                "param": "img",
                "weight": 1
              },
              {
                "scorer": "css-class",
                "param": [
                  "button",
                  "btn"
                ],
                "weight": 1
              }
            ],
            "weight": 0.6
          },
          {
            "and": [
              {
                "scorer": "html-tag",
                "param": "div",
                "weight": 1
              },
              {
                "scorer": "css-class",
                "param": [
                  "button",
                  "btn"
                ],
                "weight": 1
              }
            ],
            "weight": 0.4
          }
        ]
      }
    },
    {
      "type": "elm-type",
      "value": "input",
      "plan": {
        "or": [
          {
            "scorer": "html-tag",
            "param": "textarea",
            "weight": 0.7
          },
          {
            "and": [
              {
                "scorer": "html-tag",
                "param": "input",
                "weight": 1
              },
              {
                "scorer": "html-attr-key-and-value",
                "param": [
                  "type",
                  "text"
                ],
                "weight": 1
              }
            ],
            "weight": 1
          }
        ]
      }
    },
    {
      "type": "elm-type",
      "value": "link",
      "plan": {
        "or": [
          {
            "scorer": "html-tag",
            "param": "a",
            "weight": 0.7
          },
          {
            "and": [
              {
                "scorer": "html-tag",
                "param": "a",
                "weight": 1
              },
              {
                "scorer": "html-attr-key",
                "param": "href",
                "weight": 1
              }
            ],
            "weight": 1
          },
          {
            "and": [
              {
                "scorer": "html-tag",
                "param": "button",
                "weight": 1
              },
              {
                "scorer": "css-class",
                "param": "btn-link",
                "weight": 1
              }
            ],
            "weight": 1
          },
          {
            "and": [
              {
                "scorer": "html-tag",
                "param": "div",
                "weight": 0.9
              },
              {
                "scorer": "css-class",
                "param": "btn-link",
                "weight": 1
              }
            ],
            "weight": 1
          }
        ]
      }
    },
    {
      "type": "elm-type",
      "value": "checkbox",
      "plan": {
        "or": [
          {
            "and": [
              {
                "scorer": "html-tag",
                "param": "input",
                "weight": 1
              },
              {
                "scorer": "html-attr-key-and-value",
                "param": [
                  "type",
                  "checkbox"
                ],
                "weight": 1
              }
            ],
            "weight": 1
          }
        ]
      }
    },
    {
      "type": "elm-type",
      "value": "radio",
      "plan": {
        "or": [
          {
            "and": [
              {
                "scorer": "html-tag",
                "param": "input",
                "weight": 1
              },
              {
                "scorer": "html-attr-key-and-value",
                "param": [
                  "type",
                  "radio"
                ],
                "weight": 1
              }
            ],
            "weight": 1
          }
        ]
      }
    },
    {
      "type": "elm-type",
      "value": "label",
      "plan": {
        "or": [
          {
            "scorer": "html-tag",
            "param": "label",
            "weight": 1
          }
        ]
      }
    },
    {
      "type": "elm-type",
      "value": "element",
      "plan": {
        "or": [
          {
            "scorer": "html-tag",
            "param": "element",
            "weight": 1
          }
        ]
      }
    }
  ],
  "colors": [
    {"1": "green"},
    {"0.95-1": "lightgreen"},
    {"0.85-0.95": "YellowGreen"},
    {"0.7-0.85": "yellow"},
    {"0.1-0.7": "LightGoldenRodYellow"}    
  ]
};

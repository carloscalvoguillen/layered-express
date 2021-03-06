module.exports = function(app) {
    var controllers = app.controllers,
        views = app.views;

    return {
        
        "/": [{
                action: controllers.homeController.getAuthorAndBookList,
                views: {
                    html: views.homeView
                }
            }
        ],
        
        "/books": [{
                action: controllers.bookController.getBookIndex,
                views: {
                    html: views.bookIndexView,
                    json: views.jsonView
                }
            }
        ],
        
        "/book/:key": [{
                action: controllers.bookController.getBookByKey,
                views: {
                    html: views.bookView,
                    json: views.jsonView
                }
            }
        ],
        
        "/authors": [{
                action: controllers.authorController.displayAuthorList,
                views: {
                    html: views.authorIndexView,
                    json: views.jsonView
                }
            }
        ],
        
        "/author/:key": [{
                action: controllers.authorController.displayAuthorByKey,
                views: {
                    html: views.authorView,
                    json: views.jsonView
                }
            }
        ]
    };
};

#!/bin/sh
git filter-branch --commit-filter '
        if [ "$GIT_AUTHOR_EMAIL" = "fanilo@gmail.com" ];
		        then
				                GIT_AUTHOR_NAME="fa44";
						                GIT_AUTHOR_EMAIL="fanilo111222@gmail.com";
								                git commit-tree "$@";
										        else
												                git commit-tree "$@";
														        fi' HEAD


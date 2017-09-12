DC=docker-compose
FILE=-f docker/base.yml
PROJECT=-p hacker
DC_FLAGS=${DC} ${FILE} ${PROJECT}

env:
	${DC_FLAGS} up -d
destroy-env:
	${DC_FLAGS} down
env-logs:
	${DC_FLAGS} logs
wordpress-bash:
	${DC_FLAGS} exec wordpress bash
mysql-bash:
	${DC_FLAGS} exec mysql bash
face-bash:
	${DC_FLAGS} exec facerecognition bash

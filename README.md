# Buddy Buddy

## ERD

![erd](https://images.velog.io/images/dudgns3tp/post/d73e7298-b72d-4606-bfd4-996ada79e41e/image.png)


## DB Information


- GroupUserRelation

| Column   | 설명   | 타입   | 비고     |
| ----- | ------ | ------ | -------- |
| id(PK) | 기본키 | INTEGER | NOT-NULL, Unique |
| userId(FK) | 회원ID | STRING| NOT-NULL |
| groupId(FK) | 그룹ID | STRING| NOT-NULL |
| isLeader | (true: 조장 / false: 조원) | STRING| NOT-NULL |

- Group

| Column   | 설명   | 타입   | 비고     |
| ----- | ------ | ------ | -------- |
| id(PK) | 기본키 | INTEGER | NOT-NULL, Unique |
| groupLocation | 그룹 대표 장소 | STRING | NOT-NULL |
| groupName | 그룹 이름 | STRING | NOT-NULL |
| latitude | 그룹 대표 장소 위도 | STRING| NULL-ABLE |
| longitude | 그룹 대표 장소 경도 | STRING| NULL-ABLE |
| latitude | 그룹 대표 장소 위도 | STRING| NULL-ABLE |
| groupInfo | 그룹 정보 | STRING| NOT-NULL |



-  User

| Column   | 설명   | 타입   | 비고     |
| ----- | ------ | ------ | -------- |
| id(PK) | 기본키 | INTEGER | NOT-NULL, Unique |
| userName | 회원 이름| STRING | NOT-NULL |
| part | 파트 정보 | STRING| NOT-NULL |
| phone | 연락처 | STRING | NOT-NULL |
| place | 주소 | STRING | NOT-NULL|
| station | 지하철역 | STRING | NOT-NULL |
| university | 학교 | STRING | NOT-NULL |
| major | 전공 | STRING | NOT-NULL |
| gender | 성별(남(1) / 여(2)) |INT | NOT-NULL |
| status | YB/OB/운영진 | STRING | NOT-NULL |
| userInfo | 회원 기타 정보 | STRING | NULL-ABLE |
| latitude | 위도 | STRING | NULL-ABLE |
| longitude | 경도 | STRING | NULL-ABLE |




## API 명세서

 준비중입니다.

## Developer

FrontEnd: [이동훈](https://github.com/donghunee)

BackEnd: [최영훈](https://github.com/dudgns3tp)
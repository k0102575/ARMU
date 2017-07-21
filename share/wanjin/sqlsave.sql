ALTER TABLE thm
     ADD CONSTRAINT FK_thm_type_TO_thm -- 테마 분류 -> 테마
     FOREIGN KEY (
     thmtno -- 테마 분류
   );















-------------------------------------------------------------------------------------------
     mysql> -- 테마
 ALTER TABLE thm
      ADD CONSTRAINT FK_thm_type_TO_thm -- 테마 분류 -> 테마
      FOREIGN KEY (
      thmtno -- 테마 분류
      );
 ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'o
 )' at line 5

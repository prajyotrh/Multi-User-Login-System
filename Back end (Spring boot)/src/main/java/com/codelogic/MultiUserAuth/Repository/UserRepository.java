package com.codelogic.MultiUserAuth.Repository;

import com.codelogic.MultiUserAuth.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, java.lang.String> {
}

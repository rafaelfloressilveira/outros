package one.digitalinnovation.personalapi.repositories;

import one.digitalinnovation.personalapi.entities.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Long> {
}

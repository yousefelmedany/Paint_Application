package com.example.paint;

import com.example.paint.Shapes.Circle;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PaintApplication {

	public static Circle ret(){
		return new Circle();
	}

	public static void main(String[] args) {
		SpringApplication.run(PaintApplication.class, args);
	}



}

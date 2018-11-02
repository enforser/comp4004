package comp4004.a1;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
// set options for cucumber
@CucumberOptions(
        format = { "pretty", "html:target/cucumber" },
        features = "classpath:cucumber/"
)
public class CucumberRunnerTest { }
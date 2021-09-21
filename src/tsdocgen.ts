import Config from "./models/configuration";
import EmitEvent from "./decorators/EmitEvent";
import TsDocGenProject from "./models/project";

/**
 * The TSDocGen Application. Handles traversing source files and converting them to
 * a documentation ready app.
 */
@EmitEvent('START_PROJECT')
class TSDocGen {

    /** The project config {@link Config} */
    public config: Config = new Config();

    // Public Methods

    /**
     * Generates the documentation using the configuration options.
     */
     public generateDocumentation = () => {
        const projects = this.config.projects;
        const result: TsDocGenProject[] = [];

        for (const projectConfig of projects) {
            const project = new TsDocGenProject(projectConfig);

            result.push(project);
        }

        return result;
    }

}

export default TSDocGen;

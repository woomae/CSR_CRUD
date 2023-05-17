import { Model, DataTypes, Sequelize } from 'sequelize';



export default class Topic extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
    public author!: string;

    public static initialize(sequelize: Sequelize): void {
        Topic.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                title: {
                    type: DataTypes.STRING(128),
                    allowNull: false,
                },
                description: {
                    type: DataTypes.STRING(256),
                    allowNull: false,
                },
                author: {
                    type: DataTypes.STRING(128),
                    allowNull: false,
                }
            },
            {
                sequelize,
                tableName: 'topic',
                timestamps: false,
            }
        );
    }
}
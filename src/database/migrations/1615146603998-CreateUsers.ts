import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1615146603998 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'telefone',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'idade',
            type: 'integer',
          },
          {
            name: 'peso',
            type: 'decimal',
          },
          {
            name: 'etnia',
            type: 'varchar',
            enum: ['BRANCO', 'NEGRO', 'PARDO', 'INDIGENA', 'ASIATICO'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}

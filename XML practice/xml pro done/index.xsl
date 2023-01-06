<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/friends">

        <html>
            <body>
                <h2>Friends Info</h2>

                <table border="1">
                    <tr bgcolor="skyblue">
                        <th>Name</th>
                        <th>Age</th>
                        <th>Class</th>
                    </tr>

                    <xsl:for-each select="friend">
                        <tr>
                            <td><xsl:value-of select="name"/></td>
                            <td><xsl:value-of select="age"/></td>
                            <td><xsl:value-of select="class"/></td>
                        </tr>
                    </xsl:for-each>

                </table>

            </body>
        </html>

    </xsl:template>


</xsl:stylesheet>